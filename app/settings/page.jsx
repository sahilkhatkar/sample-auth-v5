"use client";

import styles from "./page.module.css";
import { useTheme } from "../ThemeProvider";

export default async function SignOutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <section className={styles.sessionDetails}>
        <strong>Theme: </strong>
        {/* <div>
          <button>Light</button>
          <button>Dark</button>
        </div> */}

        <button onClick={toggleTheme}>
          {theme === "light" ? "dark" : "light"}
        </button>
        {/* <p>Stored Value: {storedValue}</p> */}
      </section>
    </div>
  );
}
