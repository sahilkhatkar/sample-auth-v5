// src/store/yourSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwyQEojQ3oPDKFgw9hDXz_8BDgtEw1WbM9diSOR1u6nhktzw9ZFqINgUT9vGWdJj8E7/exec";

const initialState = {
  // sheetData: await fetch(scriptURL, { method: "GET" }).then((res) =>
  //   res.json()
  // ),
  searchJobStatus: "",
  data: [],
  loading: false, // Loading state
  error: null,
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(scriptURL, { method: "GET" }).then((res) =>
        res.json()
      );
      return response; // Assuming the API returns data in the response
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error cases
    }
  }
);

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.searchJobStatus = action.payload;
      //   state = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Handle the lifecycle of the async thunk
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true; // Set loading state when the API call is pending
        state.error = null; // Clear previous errors if any
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false; // Reset loading when the call succeeds
        state.data = action.payload; // Populate the state with the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false; // Reset loading when the call fails
        state.error = action.payload; // Set the error state with the error message
      });
  },
});

export const { increment, decrement, setItems } = dataSlice.actions;
export default dataSlice.reducer;
