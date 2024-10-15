import { auth } from "../../auth";
import styles from "./page.module.css";

export default async function SignOutPage() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      {/* <p>Hi, {session.user?.email}</p> */}
      <section className={styles.sessionDetails}>
        <div>
          <strong>Version : </strong>
          <span>1.1</span>
        </div>
        {/* <div>
          <strong>Last login : </strong>
          <span>2024-10-30T07:58:33.311Z</span>
        </div> */}
      </section>
    </div>
  );
}
