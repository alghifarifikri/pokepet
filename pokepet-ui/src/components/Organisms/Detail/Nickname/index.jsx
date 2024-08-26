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
          className="button-submit"
          onClick={submit}
        />
      </div>
    </Modal>
  );
};

export default Nickname;
