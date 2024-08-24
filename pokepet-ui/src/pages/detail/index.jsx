import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "@/components/Atoms/LoadingSpinner";
import {
  fetchPokemonDetailId,
  closeModal,
  fetchMoveDetails,
} from "@/store/pokemon-detail/slice";
import { catchPokemon } from "@/store/pokemon-catch/slice";
import { nicknamePokemon } from "@/store/pokemon-catch/slice";
import Detail from "@/components/Organisms/Detail";
import { handleShow } from "@/store/alert/slice";

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemon, loading, error, selectedMove, moveLoading, isModalOpen } =
    useSelector((state) => state.pokemonDetail);
  const { result, message, err } = useSelector((state) => state.pokemonCatch);

  const [activeTab, setActiveTab] = useState("About");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    dispatch(fetchPokemonDetailId(id));
  }, [id]);

  useEffect(() => {
    if (!first) {
      if (message === "Gagal menangkap Pokémon" || err)
        dispatch(handleShow({ show: true, type: "error", message }));
      else if (
        message === "Pokémon berhasil ditangkap" ||
        message === "Nickname berhasil diperbarui"
      ) {
        setShowModal(!showModal);
        dispatch(handleShow({ show: true, type: "success", message }));
      }
    } else setFirst(false);

    setIsLoading(false);
    setIsLoadingSubmit(false);
    setNickname("");
    setTimeout(() => {
      dispatch(handleShow({ show: false, type: "", message: "" }));
    }, 3000);
  }, [message, err]);

  const handleFetchMoveDetails = (moveUrl) => {
    dispatch(fetchMoveDetails(moveUrl));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const submit = () => {
    setIsLoadingSubmit(true);
    const payload = {
      id: result.id,
      nickname,
    };
    dispatch(nicknamePokemon(payload));
  };

  const handleCatch = () => {
    setIsLoading(true);
    const payload = {
      id_pokemon: pokemon.id,
      type: pokemon.types.map((type) => {
        return type.type.name;
      }),
      name: pokemon.name,
      image_url: pokemon.sprites.other["official-artwork"].front_default,
    };
    dispatch(catchPokemon(payload));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-black text-center">Error: {error}</div>;
  }

  if (!pokemon) {
    return (
      <div className="text-black text-center">Pokémon tidak ditemukan!</div>
    );
  }

  return (
    <Detail
      pokemon={pokemon}
      isLoading={isLoading}
      activeTab={activeTab}
      isModalOpen={isModalOpen}
      moveLoading={moveLoading}
      selectedMove={selectedMove}
      showModal={showModal}
      nickname={nickname}
      isLoadingSubmit={isLoadingSubmit}
      setActiveTab={setActiveTab}
      handleCatch={handleCatch}
      handleFetchMoveDetails={(param) => handleFetchMoveDetails(param)}
      handleCloseModal={handleCloseModal}
      setNickname={(param) => setNickname(param)}
      setShowModal={() => setShowModal(false)}
      submit={submit}
    />
  );
};

export default PokemonDetail;
