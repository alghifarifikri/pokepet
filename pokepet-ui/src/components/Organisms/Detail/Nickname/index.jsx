import Modal from "@/components/Molecules/Modal";
import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";

const Nickname = ({
  isModalOpen,
  loading,
  nickname,
  setNickname = () => {},
  closeModal = () => {},
  submit = () => {},
}) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="mt-4 p-4 flex flex-col">
        <Input
          value={nickname}
          label={"Gotcha ! Input Nickname"}
          onChange={(param) => setNickname(param)}
        />
        <Button
          label={"Submit"}
          loading={loading}
          className="w-1/3 self-center mt-3 bg-blue-500 text-white font-bold rounded-lg p-2"
          onClick={submit}
        />
      </div>
    </Modal>
  );
};

export default Nickname;
