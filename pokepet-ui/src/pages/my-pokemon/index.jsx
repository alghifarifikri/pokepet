import List from "@/components/Organisms/List";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonOwned } from "@/store/pokemon/slice";
import { endpoint } from "@/utils/api";
import { handleShow } from "@/store/alert/slice";

function MyPokemon() {
  const dispatch = useDispatch();
  const { owned, status } = useSelector((state) => state.pokemon);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemonOwned());
  }, []);

  useEffect(() => {
    const temp = owned.map((item) => {
      const data = {
        ...item,
        id: item.id_pokemon,
        id_pokemon: item.id,
        types: item.type,
      };
      return data;
    });
    setData(temp);
  }, [owned]);

  const release = async (param) => {
    setLoading(true);
    try {
      const response = await endpoint.deleteReleasePokemon({
        id: param,
      });

      dispatch(
        handleShow({
          show: true,
          type:
            response.data.message === "Pokémon berhasil di-release"
              ? "success"
              : "error",
          message: response.data.message,
        })
      );
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
      dispatch(fetchPokemonOwned());
    }
  };

  const rename = async (param) => {
    setLoading(true);
    try {
      const response = await endpoint.putPokemonRename({
        id: param,
      });

      dispatch(
        handleShow({
          show: true,
          type:
            response.data.message === "Nickname berhasil direname"
              ? "success"
              : "error",
          message: response.data.message,
        })
      );
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
      dispatch(fetchPokemonOwned());
    }
  };

  return (
    <div>
      <List
        list={data}
        status={status}
        owned={true}
        loading={loading}
        release={(param) => release(param)}
        rename={(param) => rename(param)}
      />
    </div>
  );
}

export default MyPokemon;
