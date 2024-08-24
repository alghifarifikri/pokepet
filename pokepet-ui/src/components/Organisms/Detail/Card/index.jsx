import Button from "@/components/Atoms/Button";
import Tabs from "@/components/Molecules/Tabs";

const tabs = ["About", "Status", "Moves"];

const Card = ({
  pokemon = {},
  activeTab = "About",
  isLoading = false,
  setActiveTab = () => {},
  onAction = () => {},
}) => {
  return (
    <div className="items-center bg-white shadow-md rounded-lg p-6 w-full h-2/3">
      <div className="w-full justify-center flex flex-col items-center">
        <Button
          label={"Catch !"}
          loading={isLoading}
          className="bg-red-500 text-white font-bold rounded-lg p-2"
          onClick={onAction}
        />
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-40 h-40 mb-4"
        />
        <h2 className="text-3xl text-black font-bold capitalize mb-4">
          {pokemon.name}
        </h2>
      </div>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(param) => setActiveTab(param)}
      />
    </div>
  );
};

export default Card;
