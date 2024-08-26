import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoint } from "../../utils/api";

export const catchPokemon = createAsyncThunk(
  "pokemon/catchPokemon",
  async (pokemonData, { rejectWithValue }) => {
    try {
      const response = await endpoint.postPokemonCatch(pokemonData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const nicknamePokemon = createAsyncThunk(
  "pokemon/nicknamePokemon",
  async (pokemonData, { rejectWithValue }) => {
    try {
      const response = await endpoint.putPokemonNickname(pokemonData);

      if (response.status === 200) return response.data.message;
      if (!response.success) return response.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    message: "idle",
    err: null,
    result: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(catchPokemon.pending, (state) => {
        state.message = "loading";
        state.err = null;
      })
      .addCase(catchPokemon.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.result = action.payload.data;
      })
      .addCase(nicknamePokemon.fulfilled, (state, action) => {
        if (action.payload === "Nickname sudah ada") {
          state.err = true;
          state.message = action.payload;
        } else state.message = action.payload;
      })
      .addCase(catchPokemon.rejected, (state, action) => {
        state.message = action.payload;
        state.err = null;
      })
      .addCase(nicknamePokemon.rejected, (state, action) => {
        state.err = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
