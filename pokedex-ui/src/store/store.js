import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/slice";
import pokemonDetailReducer from "./pokemon-detail/slice";
import pokemonCatchReducer from "./pokemon-catch/slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonCatch: pokemonCatchReducer,
  },
});
