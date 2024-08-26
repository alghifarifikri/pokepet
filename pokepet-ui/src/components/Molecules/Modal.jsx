/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";
import ReactDOM from "react-dom";
import Button from "@/components/Atoms/Button";

const Modal = ({ isOpen, onClose, children, hide = false }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2">
        {!hide && (
          <Button
            onClick={onClose}
            className="top-2 text-white hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </Button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
