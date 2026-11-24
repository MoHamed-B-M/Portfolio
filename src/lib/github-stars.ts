
import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// Unauthenticated GitHub API = 60 req/hr per IP; 5min cache -> ~12 req/hr.
// Never throw here: a rate limit or outage must not fail a production build.
export async function getGithubStars(): Promise<number> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${config.githubRepo}-portfolio`,
        },
      },
    );
    if (!res.ok) return 0;

    const data = await res.json();
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : 0;
  } catch {
    return 0;
  }
}
