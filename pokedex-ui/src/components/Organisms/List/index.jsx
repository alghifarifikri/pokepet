import { typeStyles } from "@/utils/icon";
import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Atoms/Button";

const LoadingSpinner = React.lazy(() =>
  import("@/components/Atoms/LoadingSpinner")
);

const PokemonList = ({
  list = [],
  status = "",
  owned = false,
  loadData = false,
  hasMore = true,
  release = () => {},
  rename = () => {},
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Suspense>
        <LoadingSpinner />
      </Suspense>
    );
  }

  if (status === "failed") {
    return <div className="text-black text-center">Error fetching data.</div>;
  }

  if (!list.length) {
    return (
      <div className="text-black text-center">Pokémon tidak ditemukan!</div>
    );
  }

  return (
    <div>
      <div className="pokemon-list">
        {list.map((pokemon, index) => (
          <div key={index}>
            <Link
              to={`/pokemon/${pokemon.id}`}
              className="text-white hover:text-white"
            >
              <div key={index} className="pokemon-item">
                <div className="text-start w-full font-bold">#{pokemon.id}</div>
                {owned && (
                  <h2 className="text-lg font-bold capitalize mb-2 bg-blue-600 p-2 rounded-lg">
                    {pokemon.nickname}
                  </h2>
                )}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  alt={pokemon.name}
                  className="w-28 h-28 mb-2"
                />
                <h2 className="text-lg font-bold capitalize mb-2">
                  {pokemon.name}
                </h2>
                <div className="types flex space-x-2">
                  {pokemon.types?.map((type) => {
                    const typeName = type?.type?.name || type;
                    const key = type.slot || type;
                    const { color, bgColor } = typeStyles[typeName] || {};
                    return (
                      <div
                        key={key}
                        className="type-name flex items-center p-2 rounded-lg"
                        style={{ backgroundColor: bgColor }}
                      >
                        <span className="mr-1">{color}</span>
                        <span className="capitalize font-bold">{typeName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
            {owned && (
              <div className="space-x-4 w-full mt-3">
                <Button
                  label={"Rename"}
                  className="button-action"
                  onClick={() => rename(pokemon.id_pokemon)}
                />
                <Button
                  label={"Release"}
                  className="button-action"
                  onClick={() => release(pokemon.id_pokemon)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {loadData && (
        <div className="text-black text-center my-4">Loading . . . .</div>
      )}
      {!hasMore && (
        <div className="text-black text-center my-4">No Data Again</div>
      )}
    </div>
  );
};

export default PokemonList;
