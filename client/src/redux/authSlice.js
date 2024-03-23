import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
