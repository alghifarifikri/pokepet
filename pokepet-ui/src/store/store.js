import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alert/slice";
import pokemonReducer from "./pokemon/slice";
import pokemonDetailReducer from "./pokemon-detail/slice";
import pokemonCatchReducer from "./pokemon-catch/slice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    pokemon: pokemonReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonCatch: pokemonCatchReducer,
  },
});
