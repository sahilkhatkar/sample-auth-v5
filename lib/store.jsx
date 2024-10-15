import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/gsheetdata/dataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer,
    },
  });
};
