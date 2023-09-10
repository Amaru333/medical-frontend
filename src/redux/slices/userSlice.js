import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initData = {
  data: {
    email: "",
    image: "",
    name: "",
    _id: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initData,
  reducers: {
    setUserDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getUserDetails = createSelector(
  (state) => state.user,
  (user) => user.data || []
);

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
