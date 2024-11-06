import { useDispatch, useSelector } from "react-redux";
import { updateAngle } from "../../features/gradient";

export default function RangeAngle() {
  const dispatch = useDispatch();

  const gradientValues = useSelector((state) => state.gradient);

  return (
    <input
      onChange={(e) => dispatch(updateAngle(e.target.value))}
      min="0"
      max="360"
      value={gradientValues.angle}
      className="w-full h-1 mb-10 cursor-pointer bg-gray-400"
      type="range"
    />
  );
}
