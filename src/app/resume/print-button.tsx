"use client";

import styles from "./cv-document.module.css";

export default function PrintButton() {
  return (
    <button type="button" className={styles.printButton} onClick={() => window.print()}>
      Print / save PDF
    </button>
  );
}
