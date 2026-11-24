import Link from "next/link";

import { coverLetter } from "@/data/cover-letter";

import PrintButton from "./print-button";
import styles from "./cover-letter.module.css";

export default function CoverLetterView() {
  const { header, subject, salutation, paragraphs, closing, signature } =
    coverLetter;

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/" className={styles.backLink}>
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <main className={styles.paper} aria-labelledby="cover-letter-name">
        <div className={styles.identity}>
          <h1 id="cover-letter-name" className={styles.name}>
            {header.name}
          </h1>
          <p className={styles.role}>{header.role}</p>
          <ul className={styles.contact}>
            {header.contacts.map((item) => (
              <li key={item.label}>
                <span className={styles.contactLabel}>{item.label}: </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.subject}>
          <span className={styles.subjectLabel}>Subject:</span> {subject}
        </p>

        <p className={styles.salutation}>{salutation}</p>

        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className={styles.closing}>{closing}</p>
        <p className={styles.signature}>{signature}</p>
      </main>
    </div>
  );
}
