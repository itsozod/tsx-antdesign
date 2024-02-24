import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myTheme: localStorage.getItem("theme") || "Black",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.myTheme = payload;
      localStorage.setItem("theme", state.myTheme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
