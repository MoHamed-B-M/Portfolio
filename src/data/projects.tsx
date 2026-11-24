import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  summary: string;
  stack: string;
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "study4u",
    category: "Study project",
    title: "Study4u",
    src: "https://repository-images.githubusercontent.com/1240141997/2f371c4c-2831-474a-9000-09b79015c305",
    screenshots: ["https://repository-images.githubusercontent.com/1240141997/2f371c4c-2831-474a-9000-09b79015c305"],
    summary:
      "A study-focused project by Mohamed Ben Mohamed, with source code available on GitHub.",
    stack: "",
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/MoHamed-B-M/study4u",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Study4u
          </TypographyP>
          <TypographyP className="font-mono">
            A study-focused project by Mohamed Ben Mohamed. The source code is
            available on GitHub.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "flambo",
    category: "Android app",
    title: "Flambo",
    src: "https://repository-images.githubusercontent.com/1361104360/76e22aa8-27d1-47dc-aaba-a3e80087f481",
    screenshots: ["https://repository-images.githubusercontent.com/1361104360/76e22aa8-27d1-47dc-aaba-a3e80087f481"],
    summary:
      "An open-source Android voice recorder and transcriber that captures microphone and system audio, performs offline speech-to-text with Vosk, and includes audio enhancement, live waveforms, and a searchable library.",
    stack: "Kotlin, Android (Material 3 Expressive), Vosk (Offline STT), Gradle.",
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/MoHamed-B-M/flambo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Flambo
          </TypographyP>
          <TypographyP className="font-mono">
            An open-source Android voice recorder and transcriber. It captures
            microphone and system audio, performs offline speech-to-text using
            Vosk, and features audio enhancement, live waveforms, and a
            searchable library for recordings and transcripts. Built with a
            Material 3 Expressive UI.
          </TypographyP>
          <TypographyP className="font-mono">
            Tech stack: Kotlin, Android (Material 3 Expressive), Vosk (Offline
            STT), Gradle.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "zim",
    category: "Android app",
    title: "ZIM",
    src: "https://repository-images.githubusercontent.com/1393295678/ca08ec90-c02b-495e-851b-cf0264f8d853",
    screenshots: ["https://repository-images.githubusercontent.com/1393295678/ca08ec90-c02b-495e-851b-cf0264f8d853"],
    summary:
      "A fast, local-first, privacy-focused Android notes app with a rich text editor, Markdown rendering, full-text search, encrypted backups, app lock, and opt-in cloud sync. All data stays on device with no tracking or telemetry.",
    stack: "Kotlin, Jetpack Compose (Material 3), Room (FTS), Hilt, Navigation Compose.",
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/MoHamed-B-M/ZIM",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ZIM
          </TypographyP>
          <TypographyP className="font-mono">
            A fast, local-first, privacy-focused notes app for Android. It
            features a Material 3 Expressive UI with a rich text editor,
            Markdown rendering, full-text search, encrypted backups, an app
            lock, and opt-in cloud sync. All data is stored locally on-device,
            with no tracking or telemetry.
          </TypographyP>
          <TypographyP className="font-mono">
            Tech stack: Kotlin, Jetpack Compose (Material 3), Room (FTS), Hilt,
            Navigation Compose.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "tempo",
    category: "Android beta",
    title: "Tempo",
    src: "https://opengraph.githubassets.com/1/MoHamed-B-M/Tempo",
    screenshots: ["https://opengraph.githubassets.com/1/MoHamed-B-M/Tempo"],
    summary:
      "An Android calendar app for social schedule coordination, with month, week, and day views, 15-minute time slot selection, and local event storage. Currently in Android beta.",
    stack: "Android, Kotlin, Local Storage.",
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/MoHamed-B-M/Tempo",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tempo
          </TypographyP>
          <TypographyP className="font-mono">
            An Android calendar app for social schedule coordination. It
            centralizes personal schedule management and helps find free time
            with friends and groups. Features include month/week/day views,
            15-minute time slot selection, and local event storage (currently
            in Android beta).
          </TypographyP>
          <TypographyP className="font-mono">
            Tech stack: Android, Kotlin, Local Storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "fluent-fold",
    category: "Windows utility",
    title: "Fluent-Fold",
    src: "https://opengraph.githubassets.com/1/MoHamed-B-M/Fluent-Fold",
    screenshots: ["https://opengraph.githubassets.com/1/MoHamed-B-M/Fluent-Fold"],
    summary:
      "A Windows desktop utility for organizing files and reclaiming disk space, with automatic categorization, bulk renaming, duplicate detection, temporary-file cleanup, Mica backdrop, dark/light themes, and an onboarding tour.",
    stack: "C#, .NET 10, Windows App SDK (WinUI 3), MVVM.",
    skills: {
      frontend: [],
      backend: [],
    },
    live: "#",
    github: "https://github.com/MoHamed-B-M/Fluent-Fold",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Fluent-Fold
          </TypographyP>
          <TypographyP className="font-mono">
            A Windows desktop utility for organizing files and reclaiming disk
            space. It automatically categorizes files, supports bulk renaming
            with custom patterns, detects duplicates, and cleans up temporary
            files. It features a modern Windows 11 Mica backdrop, dark/light
            themes, and an interactive onboarding tour.
          </TypographyP>
          <TypographyP className="font-mono">
            Tech stack: C#, .NET 10, Windows App SDK (WinUI 3), MVVM.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
