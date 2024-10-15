"use client";

import styles from "./page.module.css";
import { useSelector } from "react-redux";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Barchart from "./components/Barchart";
import Piechart from "./components/Piechart";
import Name from "./components/Name";

export default function Home() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [result, setResult] = useState([]);
  const data = useSelector((state) => state.data.sheetData);

  useEffect(() => {
    let temp = [];

    data.forEach((i) => {
      temp.push(i.client);
    });

    const frequencyObject = temp.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1; // Increment the count
      return acc;
    }, {});

    const result = Object.keys(frequencyObject).map((key) => ({
      client: key, // Convert string key to number
      orders: frequencyObject[key],
    }));
    setResult(result.sort((a, b) => a.orders - b.orders).slice(-10));
    // setResult(result.sort((a, b) => b.orders - a.orders).slice(0, 10));
  }, []);

  // console.log(navigator.userAgent);

  return (
    <div className={styles.container}>
      <div>
        <h1>
          Welcome back,
          {/* <Name /> */}
        </h1>
      </div>
      <div className={styles.charts}>
        <Piechart label="Orders" data={result} />
        <Barchart label="Orders" data={result} />
      </div>
    </div>
  );
}
