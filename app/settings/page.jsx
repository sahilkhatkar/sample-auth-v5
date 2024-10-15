"use client";

import styles from "./page.module.css";
import { useTheme } from "../ThemeProvider";

export default function SignOutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <section className={styles.sessionDetails}>
        <strong>Theme: </strong>

        <button onClick={toggleTheme}>
          {theme === "light" ? "dark" : "light"}
        </button>
        {/* <p>Stored Value: {storedValue}</p> */}
      </section>
    </div>
  );
}
