# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers screening Mohamed Ben Mohamed for IT and developer roles. They need a fast, credible overview of his education, projects, technical skills, and collaborative experience.

## Product Purpose

The portfolio introduces Mohamed Ben Mohamed as an IT student and developer. The resume surface replaces the placeholder PDF with an online, professional CV that can be read on screen and printed or saved as a PDF from the browser.

## Positioning

Mohamed is a third-year MDW student at ISET Sidi Bouzid, Tunisia, working across front-end, back-end, and Android development, with involvement in Enactus Tunisia and Tunivision.

## Operating Context

The CV is reached through the portfolio's Resume action. Readers may view it online or use a print action to save a clean PDF. The document must contain no emojis. The cover letter is reached from the Hero action and the main menu; it reads as a dark document on screen and prints as black text on white A4.

## Capabilities and Constraints

- Keep the name exactly `MOHAMED BEN MOHAMED` and role `IT Student & Developer`.
- Use only verified information already in the portfolio.
- Lead with education, then projects, skills, and experience.
- Include the five supplied projects and their repository links.
- Include the 17 supplied technologies.
- Include Enactus Tunisia and Tunivision experience.
- Contact details are the two supplied email addresses, WhatsApp (`+216 53070909`), LinkedIn, and GitHub. No personal website URL was supplied.
- Do not invent a graduation date, GPA, employment history, metrics, testimonials, or availability claims.
- Leave the rest of the portfolio layout, animations, and 3D components unchanged.
- Provide a browser print path for PDF output.
- Present the supplied cover-letter draft verbatim as an editable, printable document at `/cover-letter`.
- The home page also presents Tools & Network, Systems, Testing, and Interests sections using only user-supplied items.

## Brand Commitments

Professional, clean, one-page, no emojis, no decorative icon language in place of real content.

## Evidence on Hand

- `src/data/cover-letter.ts`: the exact user-supplied cover-letter draft, formatted as editable data.
- `src/data/config.ts`: name, role, bio, emails, WhatsApp, site, social links.
- `src/data/constants.ts`: 17 skills and Enactus/Tunivision experience.
- `src/data/projects.tsx`: five projects with descriptions, tech stacks, and repository URLs.
- The former `public/Mohamed_Ben_Mohamed_Resume.pdf` placeholder has been removed; `/resume` is now the CV source of truth.
- User-supplied home-page lists: deployment, GitHub, Git, Netlify, Vercel; Android, Windows, Linux, ChromeOS; unit, integration, end-to-end; mechanics, electricity, Arduino & robotics.

## Product Principles

- Accuracy over embellishment.
- Scanability for recruiters before visual personality.
- Content must remain readable and printable without JavaScript-driven decoration.
- Every listed link and claim must trace to supplied information.

## Accessibility & Inclusion

Use semantic headings and landmarks, sufficient contrast, visible keyboard focus, and a print layout that preserves content and link URLs where practical.
