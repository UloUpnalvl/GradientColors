import { useDispatch } from "react-redux";
import { updateColorValue } from "../../features/gradient";

export default function ColorInput({ id, color }) {
  const dispatch = useDispatch();

  return (
    <input
      onChange={(e) =>
        dispatch(updateColorValue({ id, value: e.target.value }))
      }
      value={color}
      className="size-[60px] bg-transparent rounded-md cursor-pointer [&:not(:last-child)]:mr-4"
      type="color"
    />
  );
}
