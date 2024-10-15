"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../lib/features/gsheetdata/dataSlice"; // Adjust the path to match your project structure

const MyComponent = () => {
  const dispatch = useDispatch();

  // Access data and loading state from the store
  const { data, loading, error } = useSelector((state) => state.data);

  // Dispatch the fetchData thunk when the component mounts
  // useEffect(() => {
  //   dispatch(fetchData());

  // }, [dispatch]);

  console.log(data)

  // Conditional rendering based on loading/error states
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <h1>This is help page</h1>

      {data.map((item, index) => (
        <div key={index}>{index+1}. {item.job_order}</div>
      ))}

    </div>
  );
};

export default MyComponent;
