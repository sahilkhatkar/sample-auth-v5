"use client";

import React, { useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./sidemenu.module.css";
import Link from "next/link";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdInfoOutline, MdOutlineBorderClear } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineMinusCircle } from "react-icons/hi";
import {
  PiCubeFocusFill,
  PiDotsThreeOutlineVerticalThin,
  PiTruckFill,
} from "react-icons/pi";
import Image from "next/image";
import Abc from "../abc";

export default function Sidemenu() {
  const sideMenuRef = useRef();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullUrl = `${pathname}`;
  console.log(fullUrl);
  // const fullUrl = `${window.location.origin}${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`;

  return (
    <>
    <Abc/>
      <div
        className={styles.sidemenu}
        ref={sideMenuRef}
        id="sideMenuID"
        onClick={() => sideMenuRef.current.classList.toggle(styles.showMenu)}
      >
        <div className={styles.sidemenuUpper}>
          <div>
            {/* <h1>Current URL</h1>
            <p>{fullUrl}</p> */}
            {/* <Image
              src="/public/sppl-logo.webp"
              width={80}
              height={80}
              alt="sppl-logo"
            /> */}
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? styles.active : ""}`}
              >
                <IoHomeOutline />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/orderslist"
                className={`${pathname === "/orderslist" ? styles.active : ""}`}
              >
                {/* <MdOutlineBorderClear /> */}
                <RiDashboardHorizontalLine />
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/jobstatus"
                className={`${
                  pathname.startsWith("/jobstatus") ? styles.active : ""
                }`}
              >
                <PiCubeFocusFill />
                {/* <RiDashboardHorizontalLine /> */}
                Job status
              </Link>
            </li>
            {/* <li>
              <Link
                href="/dispatch"
                className={`${pathname === "/dispatch" ? styles.active : ""}`}
              >
                <PiTruckFill />
                Dispatch
              </Link>
            </li> */}
            <li>
              <Link
                href="/settings"
                className={`${pathname === "/settings" ? styles.active : ""}`}
              >
                <IoSettingsOutline />
                Settings
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sidemenuLower}>
          <ul>
            <li>
              <Link
                href="/help"
                className={`${pathname === "/help" ? styles.active : ""}`}
              >
                <MdInfoOutline />
                Help & information
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/signout"
                className={`${
                  pathname === "/api/auth/signout" ? styles.active : ""
                }`}
              >
                <HiOutlineMinusCircle />
                Log out
              </Link>
            </li>
            {/* <p>2024</p> */}
          </ul>
        </div>
      </div>

      <div className={styles.responsiveSideBar}>
        <p>{fullUrl}</p>
        <button
          onClick={() => {
            sideMenuRef.current.classList.toggle(styles.showMenu);
          }}
        >
          <PiDotsThreeOutlineVerticalThin />
        </button>
        <div></div>
      </div>
    </>
  );
}
