// store/pokemonSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoint } from "@/utils/api";

export const fetchPokemonDetailId = createAsyncThunk(
  "pokemon/fetchPokemonDetailId",
  async (id) => {
    const response = await endpoint.getPokemonDetail(id);
    if (response.status !== 200) throw new Error("Network response was not ok");
    const data = response.data;
    return data;
  }
);

export const fetchMoveDetails = createAsyncThunk(
  "pokemon/fetchMoveDetails",
  async (moveUrl) => {
    const response = await endpoint.getPokemonDetailMoves(moveUrl);
    if (response.status !== 200)
      throw new Error("Failed to fetch move details");
    const data = response.data;
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: null,
    loading: false,
    error: null,
    moveLoading: false,
    selectedMove: null,
    moveError: null,
    isModalOpen: false,
  },
  reducers: {
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedMove = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Pokémon detail
      .addCase(fetchPokemonDetailId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetailId.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemonDetailId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Move details
      .addCase(fetchMoveDetails.pending, (state) => {
        state.moveLoading = true;
        state.moveError = null;
        state.isModalOpen = true;
      })
      .addCase(fetchMoveDetails.fulfilled, (state, action) => {
        state.selectedMove = action.payload;
        state.moveLoading = false;
      })
      .addCase(fetchMoveDetails.rejected, (state, action) => {
        state.moveLoading = false;
        state.moveError = action.error.message;
      });
  },
});

export const { closeModal } = pokemonSlice.actions;
export default pokemonSlice.reducer;
