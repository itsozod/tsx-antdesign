import { createSlice } from "@reduxjs/toolkit";

export type State = {
  userData: string;
};

const initialState: State = {
  userData: "",
};

export const userDataSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeUserData: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export const { changeUserData } = userDataSlice.actions;
