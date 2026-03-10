import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Mode = "light" | "dark";

interface UiState {
  mode: Mode;
  initialized: boolean;
}

const initialState: UiState = {
  mode: "light",
  initialized: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
    setInitialMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
      state.initialized = true;
    },
  },
});
