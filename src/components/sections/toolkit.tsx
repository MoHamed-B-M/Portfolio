"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import { cn } from "@/lib/utils";

type InfoItem = {
  label: string;
  note?: string;
};

const tools: InfoItem[] = [
  { label: "Deployment" },
  { label: "GitHub" },
  { label: "Git" },
  { label: "Netlify" },
  { label: "Vercel" },
];

const systems: InfoItem[] = [
  { label: "Android" },
  { label: "Windows" },
  { label: "Linux" },
  { label: "ChromeOS" },
];

const testing: InfoItem[] = [
  { label: "Unit" },
  { label: "Integration" },
  { label: "End-to-end" },
];

const interests: InfoItem[] = [
  {
    label: "Mechanics",
    note: "I love to explore and know how things work.",
  },
  { label: "Electricity" },
  { label: "Arduino & robotics" },
];

const cardClass = cn(
  "pointer-events-auto group relative flex h-full min-h-28 flex-col justify-between gap-4",
  "rounded-2xl border border-border/60 bg-secondary/20 p-5 backdrop-blur-sm",
  "shadow-sm transition-[transform,border-color,background-color,box-shadow] duration-300",
  "hover:-translate-y-1 hover:border-primary/20 hover:bg-secondary/40 hover:shadow-md",
);

function InfoGrid({ items, columns }: { items: InfoItem[]; columns: string }) {
  return (
    <ul role="list" className={cn("grid list-none gap-3 sm:gap-4", columns)}>
      {items.map((item, index) => (
        <li key={item.label} className="h-full">
          <article className={cardClass}>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {item.label}
              </h3>
              {item.note && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function ToolsSection() {
  return (
    <SectionWrapper id="tools" className="w-full max-w-7xl mx-auto px-4 py-20">
      <SectionHeader
        id="tools"
        title="Tools & Network"
        desc="Things I use and know may help."
        className="static mb-12"
      />
      <InfoGrid
        items={tools}
        columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      />
    </SectionWrapper>
  );
}

export function SystemsSection() {
  return (
    <SectionWrapper id="systems" className="w-full max-w-7xl mx-auto px-4 py-20">
      <SectionHeader
        id="systems"
        title="Systems"
        desc="Platforms I work across."
        className="static mb-12"
      />
      <InfoGrid items={systems} columns="grid-cols-2 lg:grid-cols-4" />
    </SectionWrapper>
  );
}

export function TestingSection() {
  return (
    <SectionWrapper id="testing" className="w-full max-w-7xl mx-auto px-4 py-20">
      <SectionHeader
        id="testing"
        title="Testing"
        desc="How I check what I build."
        className="static mb-12"
      />
      <InfoGrid items={testing} columns="grid-cols-1 sm:grid-cols-3" />
    </SectionWrapper>
  );
}

export function InterestsSection() {
  return (
    <SectionWrapper id="interests" className="w-full max-w-7xl mx-auto px-4 py-20">
      <SectionHeader
        id="interests"
        title="Interests"
        desc="What I like to explore outside coursework."
        className="static mb-12"
      />
      <InfoGrid items={interests} columns="grid-cols-1 sm:grid-cols-3" />
    </SectionWrapper>
  );
}
