"use client";
import React, { useEffect } from "react";
import { fetchData } from "../lib/features/gsheetdata/dataSlice"; // Adjust the path to match your project structure
import { useDispatch } from "react-redux";

export default function Temp() {
  const dispatch = useDispatch();

  // Dispatch the fetchData thunk when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

//   return ;
}
