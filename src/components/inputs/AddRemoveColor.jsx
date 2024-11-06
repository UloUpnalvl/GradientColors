import { useDispatch } from "react-redux";
import { addColors, removeColors } from "../../features/gradient";

export default function AddRemoveColor({ action, text }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (action === "add") {
      dispatch(addColors());
    } else if (action === "remove") {
      dispatch(removeColors());
    }
  }

  return (
    <button
      onClick={handleClick}
      className="mr-1 border rounded-md border-slate-400 min-w-[40px]"
    >
      {text}
    </button>
  );
}
