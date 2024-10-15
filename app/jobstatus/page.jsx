"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Table from "../components/Table";

export default async function SignOutPage() {
  const router = useRouter();

  const data = useSelector((state) => state.data.sheetData);

  const [currentJobList, setCurrentJobList] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const dispatchedJobs = data.reduce((sum, job) => {
      sum.push({
        designer: job.designer,
        artwork_status: job.artwork_status,
      });
      return sum;
    }, []);

    console.log(dispatchedJobs);

    let b = dispatchedJobs.reduce((acc, { designer, artwork_status }) => {
      // Find if the designer already exists in the accumulator
      let existingDesigner = acc.find((item) => item.designer === designer);

      if (!existingDesigner) {
        // If not, create a new entry for the designer
        existingDesigner = {
          designer: designer,
          artwork_status: {},
        };
        acc.push(existingDesigner);
      }

      // Increment the count for the artwork status
      existingDesigner.artwork_status[artwork_status.toLowerCase()] =
        (existingDesigner.artwork_status[artwork_status.toLowerCase()] || 0) +
        1;

      return acc;
    }, []);

    console.log(b);

    setCurrentJobList(b);

    let table_data = b.reduce((obj, job) => {
      obj.push({
        designer: job.designer,
        total: 99,
        pending: job.artwork_status[""] ? job.artwork_status[""] : 0,
        repeat: job.artwork_status.repeat,
        approved: job.artwork_status.approved,
        sentForApproval:
          typeof job.artwork_status["sent for approval"] === "undefined"
            ? 0
            : job.artwork_status["sent for approval"],
        hold: job.artwork_status.hold ? job.artwork_status.hold : 0,
      });
      return obj;
    }, []);

    setTableData(table_data);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Job status</h1>

      <section className={styles.sessionDetails}>
        {/* <div>
          <strong>Version : </strong>
          <span>1.1</span>
        </div> */}

        {/* <div className={styles.searchField}>
          <input
            id="myInput"
            className={styles.inputField}
            type="text"
            placeholder="Search here..."
            onChange={(e) => {
              console.log("first", e.target.value);
            }}
          />
          <button>
            <IoMdSearch />
          </button>
          <button>CtrlK</button>
        </div> */}

      </section>

      <Table
        column={[
          {
            name: "Name",
            // color: "var(--color-total-order)"
          },
          { name: "Total jobs", color: "var(--color-total-value)" },
          { name: "Repeat", color: "var(--color-completed-order)" },
          { name: "Approved", color: "var(--color-completed-order)" },
          { name: "Pending", color: "var(--color-pending-order)" },
          { name: "Sent for Approval", color: "var(--color-average-value)" },
          { name: "Hold", color: "var(--color-cancelled)" },
        ]}
        data={tableData}
      />
    </div>
  );
}