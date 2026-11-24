"use client";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import projects, { Project } from "@/data/projects";
import ProjectReadme from "@/components/project-readme";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog open={open} onOpenChange={setOpen}>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/5"
            style={{ aspectRatio: "3/2" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {/* `src` can be any aspect ratio (tall pages pan, normal ones fit);
                use the local wallpaper when one exists, otherwise the project
                thumbnail so preview cards never request a missing file. */}
            <ScrollingPreview
              src={project.src}
              alt={project.title}
              bg={
                project.id === "study4u"
                  ? "/assets/backgrounds/study4u.jpg"
                  : project.src
              }
              isHovered={isHovered}
            />
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-lg text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <ResponsiveDialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </ResponsiveDialogTitle>
                <ResponsiveDialogDescription className="sr-only">
                  README documentation for {project.title}.
                </ResponsiveDialogDescription>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    Source
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                      Visit
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* The README owns this scroll container so the header stays fixed. */}
          <div
            className="project-readme-scroll max-h-[80vh] overflow-y-auto overscroll-contain px-6 pb-10 pt-8 md:px-10"
            data-lenis-prevent
          >
            {open && (
              <ProjectReadme
                repoUrl={project.github}
                fallback={project.content}
              />
            )}
          </div>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
