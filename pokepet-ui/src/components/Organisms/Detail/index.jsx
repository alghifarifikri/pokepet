import About from "@/components/Organisms/Detail/About";
import Status from "@/components/Organisms/Detail/Status";
import Moves from "@/components/Organisms/Detail/Moves";
import Card from "@/components/Organisms/Detail/Card";
import Nickname from "@/components/Organisms/Detail/Nickname";

const Detail = ({
  pokemon,
  isLoading,
  activeTab,
  isModalOpen,
  moveLoading,
  selectedMove,
  showModal,
  nickname,
  isLoadingSubmit,
  setActiveTab,
  handleCatch,
  handleFetchMoveDetails,
  handleCloseModal,
  setNickname,
  setShowModal,
  submit,
}) => {
  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row h-[calc(100vh-6rem)]">
        <Card
          pokemon={pokemon}
          isLoading={isLoading}
          activeTab={activeTab}
          setActiveTab={(param) => setActiveTab(param)}
          onAction={handleCatch}
        />

        <div className="card-container">
          {activeTab === "About" && <About pokemon={pokemon} />}
          {activeTab === "Status" && <Status pokemon={pokemon} />}
          {activeTab === "Moves" && (
            <Moves
              pokemon={pokemon}
              isModalOpen={isModalOpen}
              moveLoading={moveLoading}
              selectedMove={selectedMove}
              fetch={(param) => handleFetchMoveDetails(param)}
              closeModal={handleCloseModal}
            />
          )}
        </div>
      </div>
      <Nickname
        isModalOpen={showModal}
        nickname={nickname}
        loading={isLoadingSubmit}
        setNickname={(param) => setNickname(param)}
        closeModal={() => setShowModal(false)}
        submit={submit}
      />
    </div>
  );
};

export default Detail;
