import Link from "next/link";

import { config } from "@/data/config";
import { EXPERIENCE, SKILLS, SkillNames } from "@/data/constants";
import projects from "@/data/projects";

import PrintButton from "./print-button";
import styles from "./cv-document.module.css";

const skillGroups: { title: string; names: SkillNames[] }[] = [
  {
    title: "Front-end",
    names: [
      SkillNames.ANGULAR,
      SkillNames.REACT,
      SkillNames.VITE,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.TS,
    ],
  },
  {
    title: "Back-end and data",
    names: [
      SkillNames.XML,
      SkillNames.JSON,
      SkillNames.LARAVEL,
      SkillNames.SPRING,
      SkillNames.JAVA,
      SkillNames.DOTNET,
    ],
  },
  {
    title: "Mobile and desktop",
    names: [SkillNames.KOTLIN, SkillNames.FLUTTER, SkillNames.WINDOWS],
  },
  {
    title: "Tools",
    names: [SkillNames.POSTMAN],
  },
];

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const contactItems = [
  { label: config.email, href: `mailto:${config.email}` },
  { label: config.secondaryEmail, href: `mailto:${config.secondaryEmail}` },
  { label: config.social.whatsapp, href: config.whatsappUrl },
  { label: displayUrl(config.social.linkedin), href: config.social.linkedin },
  { label: displayUrl(config.social.github), href: config.social.github },
];

export default function ResumeView() {
  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/" className={styles.backLink}>
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <main className={styles.paper} aria-labelledby="cv-name">
        <header className={styles.identity}>
          <h1 id="cv-name" className={styles.name}>
            {config.author}
          </h1>
          <p className={styles.role}>IT Student &amp; Developer</p>
          <ul className={styles.contact}>
            {contactItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className={styles.section} aria-labelledby="cv-profile">
          <h2 id="cv-profile" className={styles.sectionHeading}>
            Profile
          </h2>
          <p className={styles.profile}>{config.description.long}</p>
        </section>

        <section className={styles.section} aria-labelledby="cv-education">
          <h2 id="cv-education" className={styles.sectionHeading}>
            Education
          </h2>
          <div className={styles.educationRow}>
            <div>
              <h3 className={styles.educationInstitution}>ISET Sidi Bouzid</h3>
              <p className={styles.educationDetail}>MDW, third year, Tunisia</p>
            </div>
            <p className={styles.date}>Current</p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="cv-projects">
          <h2 id="cv-projects" className={styles.sectionHeading}>
            Projects
          </h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} className={styles.project}>
                <div>
                  <h3 className={styles.projectName}>{project.title}</h3>
                  <p className={styles.projectCategory}>{project.category}</p>
                  {project.github && (
                    <a
                      className={styles.projectLink}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {displayUrl(project.github)}
                    </a>
                  )}
                </div>
                <div>
                  <p className={styles.projectSummary}>{project.summary}</p>
                  {project.stack && (
                    <p className={styles.projectStack}>
                      Stack: {project.stack}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="cv-skills">
          <h2 id="cv-skills" className={styles.sectionHeading}>
            Technical Skills
          </h2>
          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <div key={group.title} className={styles.stackGroup}>
                <h3>{group.title}</h3>
                <p>
                  {group.names.map((name) => SKILLS[name].label).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="cv-experience">
          <h2 id="cv-experience" className={styles.sectionHeading}>
            Experience
          </h2>
          <ul className={styles.experienceList}>
            {EXPERIENCE.map((item) => (
              <li key={item.id} className={styles.experienceItem}>
                <div>
                  <h3 className={styles.itemTitle}>{item.company}</h3>
                  <p className={styles.itemMeta}>{item.title}</p>
                </div>
                <div>
                  <p className={styles.date}>
                    {item.periods
                      .map((period) =>
                        period.start === period.end
                          ? period.start
                          : `${period.start} – ${period.end}`,
                      )
                      .join(", ")}
                  </p>
                  <ul className={styles.experienceDescription}>
                    {item.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
