/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/credentials/credentialsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CredentialsState {
  snapshot: any; // Intended for Firestore query snapshot or any data
}

const initialState: CredentialsState = {
  snapshot: null,
};

const credentialsSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    setCredentialsSnapshot(state, action: PayloadAction<any>) {
      state.snapshot = action.payload;
    },
    setClearCredentials: (state) => {
      state.snapshot = null;
    },
  },
});

export const { setCredentialsSnapshot, setClearCredentials } =
  credentialsSlice.actions;

export default credentialsSlice.reducer;
