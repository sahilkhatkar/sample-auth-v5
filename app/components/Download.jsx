"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React, { useState } from "react";
import styles from "./download.module.css";

import { MdOutlineDownloading } from "react-icons/md";

export default function Download({ pendingListData, query }) {
  const [downloading, setDownloading] = useState(false);

  const downloadPDF = () => {
    setDownloading(true);
    if (pendingListData.length === 0) {
      alert("No data available to generate PDF");
      return;
    }
    const doc = new jsPDF("l");

    // Add the heading
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Pending orders:-", 14, 10); // Add the heading at (x, y) coordinates

    // Define the columns
    const columns = [
      { title: "S.No" },
      { title: "Order ID" },
      { title: "Timestamp" },
      { title: "PO date" },
      { title: "Client" },
      { title: "Job" },
      { title: "Quantity" },
      { title: "Sheet" },
      { title: "Approval" },
      { title: "Artwork" },
      { title: "Job card" },
      { title: "Dispatch" },
      { title: "Balance" },
    ];

    autoTable(doc, {
      startY: 17,
      head: [columns.map((col) => col.title)],
      body: pendingListData.map((item, index) => [
        `${index + 1}`,
        item.job_order,
        `${new Date(item.timestamp).getDate()}/${
          new Date(item.timestamp).getMonth() + 1
        }/${new Date(item.timestamp).getFullYear()}`,
        // `${new Date(item.timestamp).toLocaleDateString()}`,
        // `${new Date(item.timestamp).toDateString().slice(4)}`,
        `${new Date(item.po_date).getDate()}/${
          new Date(item.po_date).getMonth() + 1
        }/${new Date(item.po_date).getFullYear()}`,
        item.client,
        item.job_name,
        item.quantity,
        `${
          item.sheet_size_ups && item.sheet_size_length && item.sheet_size_width
            ? "Available"
            : "Pending"
        }`,
        `${
          item.artwork_actual && item.artwork_actual
            ? `${new Date(item.artwork_actual).getDate()}/${
                new Date(item.artwork_actual).getMonth() + 1
              }/${new Date(item.artwork_actual).getFullYear()}`
            : ""
        }`,
        item.artwork_status,
        item.jobcard_status,
        item.dispatch_quantity,

        `${
          item.dispatch_quantity ? item.dispatch_quantity - item.quantity : ""
        }`,
      ]),

      styles: {
        fontSize: 8,
        cellPadding: 0,
        halign: "left",
        valign: "middle",
      },
      headStyles: {
        cellPadding: 2,
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      bodyStyles: {
        cellPadding: 2,
        fillColor: [255, 255, 255], // RGB color for body background
        textColor: [0, 0, 0], // RGB color for body text
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], // RGB color for alternate rows
      },
      margin: { top: 5, left: 1, right: 1, bottom: 5 },

      didParseCell: (data) => {
        if (data.column.index === 12 && data.cell.raw < 0) {
          data.cell.styles.fillColor = [255, 0, 0]; // Red color for negative values
          data.cell.styles.textColor = [255, 255, 255]; // Optional: white text for contrast
        } else if (data.column.index === 12 && data.cell.raw > 0) {
          data.cell.styles.fillColor = [46, 207, 3]; // Green color for negative values
          data.cell.styles.textColor = [255, 255, 255]; // Optional: white text for contrast
        }

        if (data.column.index === 9 && data.cell.raw === "Sent for Approval") {
          data.cell.styles.fillColor = [255, 215, 0]; // Gold color
          data.cell.styles.textColor = [0, 0, 0]; // Optional: Black text for contrast
        }
      },
    });

    // Save the PDF
    doc.save(`${query}.pdf`);
    setDownloading(false);
  };

  return (
    <button
      className={styles.downloadBtn}
      onClick={downloadPDF}
      disabled={downloading}
    >
      <MdOutlineDownloading /> &nbsp;
      {downloading && downloading ? " Downloading..." : " Download"}
    </button>
  );
}
