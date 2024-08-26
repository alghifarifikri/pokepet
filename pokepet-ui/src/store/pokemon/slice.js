import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoint } from "@/utils/api";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async ({ size, page }, { dispatch }) => {
    const response = await endpoint.getPokemonList(size, page);
    dispatch(fetchPokemonDetails(response.data.results));
    dispatch(getPokemon(response.data.results));
  }
);

export const fetchPokemonOwned = createAsyncThunk(
  "pokemon/fetchPokemonOwned",
  async (_, { dispatch }) => {
    const response = await endpoint.getPokemonOwnedList();
    dispatch(getPokemonOwned(response.data.result));
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  "pokemon/fetchPokemonDetails",
  async (pokemonList, { dispatch }) => {
    const details = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const response = await endpoint.getPokemonListDetail(pokemon.url);
        return response.data;
      })
    );
    dispatch(getPokemonDetail(details));
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [],
    owned: [],
    tempList: [],
    limit: 12,
    offset: 0,
    status: "idle",
    hasMore: true,
  },
  reducers: {
    increaseLimit: (state) => {
      state.offset += state.limit;
    },
    getPokemon: (state, action) => {
      state.status = "succeeded";
      state.tempList = [...state.tempList, ...action.payload];
      if (action.payload.length < state.limit) {
        state.hasMore = false;
      }
      state.loading = false;
    },
    getPokemonDetail: (state, action) => {
      const uniquePokemon = action.payload.filter(
        (newPokemon) =>
          !state.list.some(
            (existingPokemon) => existingPokemon.id === newPokemon.id
          )
      );

      state.list = [...state.list, ...uniquePokemon];
      state.tempList = [];
    },
    getPokemonOwned: (state, action) => {
      state.status = "succeeded";
      state.owned = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchPokemonOwned.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonOwned.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increaseLimit, getPokemon, getPokemonDetail, getPokemonOwned } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
