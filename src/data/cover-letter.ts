import { config } from "@/data/config";

/**
 * The cover letter draft lives here so the wording can be edited without
 * touching the page layout or print styles. Display strings match the supplied
 * draft exactly; only the link destinations come from the shared site config.
 */
export const coverLetter = {
  header: {
    name: "MOHAMED BEN MOHAMED",
    role: "IT Student & Developer | ISET Sidi Bouzid",
    contacts: [
      {
        label: "Email",
        value: "benmohamed715@gmail.com",
        href: `mailto:${config.email}`,
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/hama-ben-hama-bba490441",
        href: config.social.linkedin,
      },
      {
        label: "GitHub",
        value: "github.com/MoHamed-B-M",
        href: config.social.github,
      },
    ],
  },
  subject: "Application for Internship / Junior Developer Position",
  salutation: "Dear Hiring Manager,",
  paragraphs: [
    "I am currently a 3rd-year student pursuing a degree in Multimedia and Web Development (MDW) at ISET Sidi Bouzid. I am actively seeking an opportunity (internship, apprenticeship, or junior role) to apply my development skills and gain meaningful professional experience.",
    "Passionate about development and engineering, I have built a solid technical foundation spanning Front-end (Angular, React, Vite), Back-end (Laravel, Spring Boot, .NET), Android mobile development (Kotlin, Flutter), and Windows application development. I am driven by a desire to understand how things work, whether that is in code or through my personal interests in mechanics and electricity.",
    "Beyond my technical skills, I am a dedicated team player. My involvement with Enactus (since 2025) and my collaboration with Tunivision have strengthened my communication, project management, and initiative. I am accustomed to working collaboratively to achieve shared goals, whether designing software solutions or contributing to social impact projects.",
    "I am curious, rigorous, and eager to take on new challenges. I would be delighted to discuss how my profile and motivation align with your team's needs.",
    "Thank you for your time and consideration. I look forward to hearing from you.",
  ],
  closing: "Sincerely,",
  signature: "MOHAMED BEN MOHAMED",
};
