"use client";

import "github-markdown-css/github-markdown-dark.css";
import "highlight.js/styles/github-dark.css";

import { Info, Loader2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type Repo = { owner: string; repo: string };

type ReadmeState =
  | { status: "loading" }
  | {
      status: "ready";
      markdown: string;
      rawUrl: string;
      rawBase: string;
      webBase: string;
    }
  | { status: "error" };

/* README files are third-party HTML+Markdown. GitHub's own schema is the base;
   the extra attributes are the ones this component adds itself. */
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), "target", "rel"],
    img: [
      ...(defaultSchema.attributes?.img ?? []),
      "className",
      "loading",
      "decoding",
    ],
  },
};

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function walk(node: HastNode, visit: (node: HastNode) => void) {
  visit(node);
  node.children?.forEach((child) => walk(child, visit));
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

/* READMEs use repo-relative asset paths; resolve them against the branch the
   README actually came from instead of the portfolio's origin. */
function resolveUrl(
  value: string,
  { base, rootBase }: { base: string; rootBase: string }
) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return value;
  if (value.startsWith("/")) return `${rootBase}${value.slice(1)}`;
  try {
    return new URL(value, base).href;
  } catch {
    return value;
  }
}

function normalizeReadme({
  rawUrl,
  rawBase,
  webBase,
}: {
  rawUrl: string;
  rawBase: string;
  webBase: string;
}) {
  return () => (tree: unknown) => {
    walk(tree as HastNode, (node) => {
      const props = node.properties;
      if (!props) return;

      if (node.tagName === "img") {
        const src = asString(props.src);
        if (src) props.src = resolveUrl(src, { base: rawUrl, rootBase: rawBase });
      }

      if (node.tagName === "source") {
        const srcSet = asString(props.srcSet);
        if (srcSet) {
          props.srcSet = srcSet
            .split(",")
            .map((entry) => {
              const [url, ...descriptor] = entry.trim().split(/\s+/);
              return [resolveUrl(url, { base: rawUrl, rootBase: rawBase }), ...descriptor].join(" ");
            })
            .join(", ");
        }
      }

      if (node.tagName === "a") {
        const href = asString(props.href);
        if (href) props.href = resolveUrl(href, { base: webBase, rootBase: webBase });
        props.target = "_blank";
        props.rel = "noopener noreferrer";
      }
    });
  };
}

function parseRepo(repoUrl?: string): Repo | null {
  if (!repoUrl || repoUrl === "#") return null;
  try {
    const { hostname, pathname } = new URL(repoUrl);
    if (hostname !== "github.com") return null;
    const [owner, repo] = pathname.split("/").filter(Boolean);
    return owner && repo ? { owner, repo } : null;
  } catch {
    return null;
  }
}

async function fetchReadme(
  { owner, repo }: Repo,
  signal: AbortSignal
): Promise<Extract<ReadmeState, { status: "ready" }>> {
  for (const branch of ["main", "master"]) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
    try {
      const response = await fetch(rawUrl, { signal });
      if (!response.ok) continue;
      const markdown = await response.text();
      if (!markdown.trim()) continue;
      return {
        status: "ready",
        markdown,
        rawUrl,
        rawBase: `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`,
        webBase: `https://github.com/${owner}/${repo}/blob/${branch}/`,
      };
    } catch (error) {
      if (signal.aborted) throw error;
      // Try the other default branch name before giving up.
    }
  }
  throw new Error("README unavailable");
}

function ReadmeSkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="h-7 w-1/3 rounded-md bg-muted" />
      <div className="h-3 w-full rounded bg-muted/70" />
      <div className="h-3 w-11/12 rounded bg-muted/70" />
      <div className="h-3 w-4/5 rounded bg-muted/70" />
      <div className="grid grid-cols-2 gap-3 pt-6 md:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="aspect-[4/3] rounded-lg border border-border/60 bg-muted/50"
          />
        ))}
      </div>
      <div className="h-3 w-2/3 rounded bg-muted/70" />
    </div>
  );
}

export default function ProjectReadme({
  repoUrl,
  fallback,
}: {
  repoUrl?: string;
  fallback?: ReactNode;
}) {
  // Mounted only while its dialog is open, so every open starts fresh.
  const [state, setState] = useState<ReadmeState>({ status: "loading" });
  const hasRepo = parseRepo(repoUrl) !== null;

  useEffect(() => {
    const repo = parseRepo(repoUrl);
    if (!repo) return;

    const controller = new AbortController();

    fetchReadme(repo, controller.signal)
      .then(setState)
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: "error" });
      });

    return () => controller.abort();
  }, [repoUrl]);

  if (state.status === "loading") {
    return (
      <div className="space-y-8">
        <p
          role="status"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
          Fetching README
        </p>
        <ReadmeSkeleton />
      </div>
    );
  }

  if (state.status === "error" || !hasRepo) {
    return (
      <div className="space-y-8">
        <p className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Couldn&apos;t load the README right now — showing the project
            overview instead. The source is linked in the header.
          </span>
        </p>
        {fallback}
      </div>
    );
  }

  return (
    <div className="markdown-body !bg-transparent !text-inherit max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          () => rehypeSanitize(sanitizeSchema),
          rehypeHighlight,
          normalizeReadme({
            rawUrl: state.rawUrl,
            rawBase: state.rawBase,
            webBase: state.webBase,
          }),
        ]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: ({ node, className, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img
              {...props}
              className={["max-w-full", "h-auto", "rounded-md", className]
                .filter(Boolean)
                .join(" ")}
              loading="lazy"
              decoding="async"
            />
          ),
        }}
      >
        {state.markdown}
      </ReactMarkdown>
    </div>
  );
}
