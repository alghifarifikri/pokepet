import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const handleShow = createAsyncThunk(
  "alert/handleShow",
  async ({ show, type, message }) => {
    const data = {
      show,
      type,
      message,
    };
    return data;
  }
);

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    type: "",
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleShow.pending, (state) => {
      state.show = false;
    });
    builder.addCase(handleShow.fulfilled, (state, action) => {
      state.show = action.payload.show;
      state.type = action.payload.type;
      state.message = action.payload.message;
    });
    builder.addCase(handleShow.rejected, (state) => {
      state.show = false;
    });
  },
});

export default alertSlice.reducer;
