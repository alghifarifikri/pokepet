import List from "@/components/Organisms/List";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonOwned } from "@/store/pokemon/slice";
import { endpoint } from "@/utils/api";
import Alert from "@/components/Atoms/Alert";

function MyPokemon() {
  const dispatch = useDispatch();
  const { owned, status } = useSelector((state) => state.pokemon);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

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

      if (response.data.message === "Pokémon berhasil di-release")
        setType("success");
      else setType("error");

      setMessage(response.data.message);
      setShow(true);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
      dispatch(fetchPokemonOwned());
      setTimeout(() => {
        setShow(false);
        setType(null);
      }, 3000);
    }
  };

  const rename = async (param) => {
    setLoading(true);
    try {
      const response = await endpoint.putPokemonRename({
        id: param,
      });

      if (response.data.message === "Nickname berhasil direname")
        setType("success");
      else setType("error");

      setMessage(response.data.message);
      setShow(true);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
      dispatch(fetchPokemonOwned());
      setTimeout(() => {
        setShow(false);
        setType(null);
      }, 3000);
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
      {show && <Alert message={message} type={type} />}
    </div>
  );
}

export default MyPokemon;
