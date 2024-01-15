import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    darkMode: "light",
  },
  reducers: {
    toggleDark: (state) => {
      const mode = state.darkMode === "dark" ? "light" : "dark";
      document.body.setAttribute("data-bs-theme", mode);
      state.darkMode = mode;
    },
  },
});

export const { toggleDark } = settingsSlice.actions;
export default settingsSlice.reducer;
