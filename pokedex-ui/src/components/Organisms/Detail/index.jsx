import About from "@/components/Organisms/Detail/About";
import Status from "@/components/Organisms/Detail/Status";
import Moves from "@/components/Organisms/Detail/Moves";
import Card from "@/components/Organisms/Detail/Card";
import Alert from "@/components/Atoms/Alert";
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
  message,
  type,
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

        <div className="bg-blue-400 w-full shadow-md rounded-lg p-6 ml-0 md:ml-10 mt-4 md:mt-0 h-2/3 overflow-y-auto">
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
      {type && <Alert message={message} type={type} />}
    </div>
  );
};

export default Detail;
