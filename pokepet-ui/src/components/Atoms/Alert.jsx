import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleShow } from "@/store/alert/slice";

const iconStyles = "w-6 h-6 mr-2";
const Alert = ({ type, message }) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.alert);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(handleShow({ show: false, type: "", message: "" }));
      }, 3000);
    }
  }, [show]);

  return (
    <div
      className={`${
        type === "success"
          ? "bg-green-100 border-green-500 text-green-500"
          : "bg-red-100 border-red-500 text-red-500"
      } rounded-lg items-center mb-4 border-l-4 p-4 fixed flex top-0 z-10`}
    >
      {type === "success" && <CheckCircleIcon className={iconStyles} />}
      {type !== "success" && <ExclamationCircleIcon className={iconStyles} />}
      <span className="flex-1">{message}</span>
    </div>
  );
};

export default Alert;
