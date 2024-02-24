import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myTheme: localStorage.getItem("myTheme") || "Black",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.myTheme = payload;
      localStorage.setItem("myTheme", state.myTheme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
