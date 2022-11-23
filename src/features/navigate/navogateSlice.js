import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNavId: "11",
};

export const navigateSlice = createSlice({
  name: "navigate",
  initialState,
  reducers: {
    navigateTab: (state, action) => {
      state.currentNavId = action.payload;
    },
  },
});

export const { navigateTab } = navigateSlice.actions;

export default navigateSlice.reducer;
