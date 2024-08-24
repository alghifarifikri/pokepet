import { typeStyles } from "@/utils/icon";

const About = ({ pokemon = {} }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Pokédex Data</h3>
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span className="font-bold">Height</span>
          <span>{(pokemon.height / 10).toFixed(1)} m</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-bold">Weight</span>
          <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">Abilities</span>
          <ul className="list-disc ml-4">
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="capitalize">
                {ability.ability.name} {ability.is_hidden && "(hidden ability)"}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <span className="font-bold">Types</span>
          <div className="flex space-x-2 mt-2">
            {pokemon.types?.map((type) => {
              const typeName = type.type.name;
              const { color, bgColor } = typeStyles[typeName] || {};
              return (
                <div
                  key={type.slot}
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
      </div>
    </div>
  );
};

export default About;
