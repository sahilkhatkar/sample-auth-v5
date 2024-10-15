// import { signOut, auth } from "@/auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import SignOutBtn from "./signOutBtn";

export default async function SignOutPage() {
  // const session = await auth();
  // console.log(session);
  // const date = new Date(session?.expires);
  // const options = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: true, // Use 12-hour format
  // };

  return (
    <>
      {/* <h1>Expiry time: {date.toLocaleString("en-US")}</h1> */}
      <SignOutBtn />
    </>
  );
}
