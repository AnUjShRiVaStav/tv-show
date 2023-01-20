import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  schedule: [],
};

// A slice for schedule with our 3 reducers
const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    getSchedule: (state) => {
      state.loading = true;
    },
    getScheduleSuccess: (state, { payload }) => {
      state.schedule = payload
      state.loading = false
      state.hasErrors = false
    },
    getScheduleFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getSchedule, getScheduleSuccess, getScheduleFailure } = scheduleSlice.actions;


// A selector
export const scheduleSelector = (state) => state.schedule;

// The reducer
export default scheduleSlice.reducer;