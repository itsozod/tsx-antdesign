import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./userData/userDataSlice";
import { themeSlice } from "./themeChanger/themeSlice";

export const store = configureStore({
  reducer: {
    login: userDataSlice.reducer,
    theme: themeSlice.reducer,
  },
});
