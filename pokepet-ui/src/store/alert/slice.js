import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const handleShow = createAsyncThunk(
  "alert/handleShow",
  async ({ show, type, message }, { dispatch }) => {
    const data = {
      show,
      type,
      message,
    };
    dispatch(setAlert(data));
  }
);

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    type: "",
    message: "",
  },
  reducers: {
    setAlert: (state, action) => {
      state.show = action.payload.show;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
