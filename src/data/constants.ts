// Content for the 3D keyboard: 17 real technologies from my stack.
export enum SkillNames {
  ANGULAR = "angular",
  REACT = "react",
  VITE = "vite",
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  XML = "xml",
  JSON = "json",
  LARAVEL = "laravel",
  SPRING = "spring",
  JAVA = "java",
  DOTNET = "dotnet",
  POSTMAN = "postman",
  KOTLIN = "kotlin",
  FLUTTER = "flutter",
  WINDOWS = "windows",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.ANGULAR]: {
    id: 1,
    name: "angular",
    label: "Angular",
    shortDescription: "Front-end framework for building web apps.",
    color: "#dd0031",
    icon: "/assets/keyboard/logos/angular.svg",
    keyboardIcon: "/assets/keyboard/logos/white/angular.svg",
    keyboardColor: "#c3002f",
  },
  [SkillNames.REACT]: {
    id: 2,
    name: "react",
    label: "React",
    shortDescription: "Front-end library for interactive UIs.",
    color: "#61dafb",
    icon: "/assets/keyboard/logos/react.svg",
    keyboardIcon: "/assets/keyboard/logos/white/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.VITE]: {
    id: 3,
    name: "vite",
    label: "Vite",
    shortDescription: "Fast front-end tooling and dev server.",
    color: "#646cff",
    icon: "/assets/keyboard/logos/vite.svg",
    keyboardIcon: "/assets/keyboard/logos/white/vite.svg",
    keyboardColor: "#5b57d6",
  },
  [SkillNames.HTML]: {
    id: 4,
    name: "html",
    label: "HTML",
    shortDescription: "The structure of the web.",
    color: "#e34f26",
    icon: "/assets/keyboard/logos/html.svg",
    keyboardIcon: "/assets/keyboard/logos/white/html.svg",
    keyboardColor: "#e34f26",
  },
  [SkillNames.CSS]: {
    id: 5,
    name: "css",
    label: "CSS",
    shortDescription: "Styling for responsive interfaces.",
    color: "#1572b6",
    icon: "/assets/keyboard/logos/css.svg",
    keyboardIcon: "/assets/keyboard/logos/white/css.svg",
    keyboardColor: "#1572b6",
  },
  [SkillNames.JS]: {
    id: 6,
    name: "js",
    label: "JavaScript",
    shortDescription: "The core language of the web.",
    color: "#f0db4f",
    icon: "/assets/keyboard/logos/js.svg",
    keyboardIcon: "/assets/keyboard/logos/white/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 7,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for larger apps.",
    color: "#007acc",
    icon: "/assets/keyboard/logos/ts.svg",
    keyboardIcon: "/assets/keyboard/logos/white/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.XML]: {
    id: 8,
    name: "xml",
    label: "XML",
    shortDescription: "Structured data markup.",
    color: "#f78c20",
    icon: "/assets/keyboard/logos/xml.svg",
    keyboardIcon: "/assets/keyboard/logos/white/xml.svg",
    keyboardColor: "#e07b18",
  },
  [SkillNames.JSON]: {
    id: 9,
    name: "json",
    label: "JSON",
    shortDescription: "Lightweight data interchange.",
    color: "#292929",
    icon: "/assets/keyboard/logos/json.svg",
    keyboardIcon: "/assets/keyboard/logos/white/json.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.LARAVEL]: {
    id: 10,
    name: "laravel",
    label: "Laravel",
    shortDescription: "PHP back-end framework.",
    color: "#ff2d20",
    icon: "/assets/keyboard/logos/laravel.svg",
    keyboardIcon: "/assets/keyboard/logos/white/laravel.svg",
    keyboardColor: "#e1261a",
  },
  [SkillNames.SPRING]: {
    id: 11,
    name: "spring",
    label: "Spring Boot",
    shortDescription: "Java back-end framework.",
    color: "#6db33f",
    icon: "/assets/keyboard/logos/spring.svg",
    keyboardIcon: "/assets/keyboard/logos/white/spring.svg",
    keyboardColor: "#6db33f",
  },
  [SkillNames.JAVA]: {
    id: 12,
    name: "java",
    label: "Java",
    shortDescription: "Back-end and Android language.",
    color: "#007396",
    icon: "/assets/keyboard/logos/java.svg",
    keyboardIcon: "/assets/keyboard/logos/white/java.svg",
    keyboardColor: "#007396",
  },
  [SkillNames.DOTNET]: {
    id: 13,
    name: "dotnet",
    label: ".NET",
    shortDescription: "Microsoft back-end platform.",
    color: "#512bd4",
    icon: "/assets/keyboard/logos/dotnet.svg",
    keyboardIcon: "/assets/keyboard/logos/white/dotnet.svg",
    keyboardColor: "#512bd4",
  },
  [SkillNames.POSTMAN]: {
    id: 14,
    name: "postman",
    label: "Postman",
    shortDescription: "API testing and exploration.",
    color: "#ff6c37",
    icon: "/assets/keyboard/logos/postman.svg",
    keyboardIcon: "/assets/keyboard/logos/white/postman.svg",
    keyboardColor: "#ff6c37",
  },
  [SkillNames.KOTLIN]: {
    id: 15,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Android and JVM language.",
    color: "#a97bff",
    icon: "/assets/keyboard/logos/kotlin.svg",
    keyboardIcon: "/assets/keyboard/logos/white/kotlin.svg",
    keyboardColor: "#a97bff",
  },
  [SkillNames.FLUTTER]: {
    id: 16,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Cross-platform mobile UI toolkit.",
    color: "#42a5f5",
    icon: "/assets/keyboard/logos/flutter.svg",
    keyboardIcon: "/assets/keyboard/logos/white/flutter.svg",
    keyboardColor: "#42a5f5",
  },
  [SkillNames.WINDOWS]: {
    id: 17,
    name: "windows",
    label: "Windows dev",
    shortDescription: "Windows-based development environment.",
    color: "#0078d4",
    icon: "/assets/keyboard/logos/windows.svg",
    keyboardIcon: "/assets/keyboard/logos/white/windows.svg",
    keyboardColor: "#0078d4",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "2025", end: "Present" }],
    title: "Active Member",
    company: "Enactus Tunisia",
    description: [
      "Active member since 2025, working as part of the Enactus Tunisia team.",
      "Contribute to teamwork and social entrepreneurship activities.",
    ],
    skills: [],
  },
  {
    id: 2,
    periods: [{ start: "Media", end: "Community platform" }],
    title: "Media & Community Collaboration",
    company: "Tunivision",
    description: [
      "Collaborated with Tunivision on media and community platform work.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
