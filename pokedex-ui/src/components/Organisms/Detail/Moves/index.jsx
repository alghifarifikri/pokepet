import Modal from "@/components/Molecules/Modal";
import LoadingSpinner from "@/components/Atoms/LoadingSpinner";

const Moves = ({
  pokemon = {},
  isModalOpen = false,
  moveLoading = false,
  selectedMove = {},
  fetch = () => {},
  closeModal = () => {},
}) => {
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold mb-2">Moves</h3>
        {pokemon.moves.map((move, index) => (
          <div
            key={index}
            className="capitalize cursor-pointer text-black hover:bg-gray-400 shadow-md bg-gray-200 rounded-lg p-1 mb-2"
            onClick={() => fetch(move.move.url)}
          >
            {move.move.name}
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {moveLoading && <LoadingSpinner />}
        {selectedMove && (
          <div className="mt-4 p-4 text-gray-600">
            <h4 className="text-lg font-bold capitalize mb-2">
              {selectedMove.name}
            </h4>
            <p>
              <strong>Type:</strong> {selectedMove.type.name}
            </p>
            <p>
              <strong>Power:</strong> {selectedMove.power || "N/A"}
            </p>
            <p>
              <strong>Accuracy:</strong> {selectedMove.accuracy || "N/A"}
            </p>
            <p>
              <strong>PP:</strong> {selectedMove.pp}
            </p>
            <p>
              <strong>Damage Class:</strong> {selectedMove.damage_class.name}
            </p>
            <p>
              <strong>Effect:</strong>{" "}
              {selectedMove.effect_entries.find(
                (entry) => entry.language.name === "en"
              )?.short_effect || "N/A"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Moves;
