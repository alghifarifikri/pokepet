import axios from "axios";

const api = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return async (url, body) => {
    try {
      const requestOptions = {
        method,
      };

      if (body) {
        if (method === "GET") {
          requestOptions.params = body;
        } else {
          requestOptions.data = body;
        }
      }

      const obj = { url: url, ...requestOptions };
      return await axios(obj);
    } catch (error) {
      console.log("hit api error", error);
      return {
        success: false,
        message: error.response.data.error,
      };
    }
  };
}

// endpoint-collection
export const endpoint = {
  getPokemonList: async (size, page) =>
    await api.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=${page}`
    ),
  getPokemonOwnedList: async () =>
    await api.get("http://localhost:4040/pokepet/owned"),
  getPokemonDetail: async (id) =>
    await api.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
  getPokemonListDetail: async (url) => await api.get(url),
  getPokemonDetailMoves: async (url) => await api.get(url),
  postPokemonCatch: async (body) =>
    await api.post("http://localhost:4040/pokepet/catch", body),
  putPokemonNickname: async (body) =>
    await api.put("http://localhost:4040/pokepet/nickname", body),
  putPokemonRename: async (body) =>
    await api.put("http://localhost:4040/pokepet/rename", body),
  deleteReleasePokemon: async (body) =>
    await api.delete("http://localhost:4040/pokepet/release", body),
};
