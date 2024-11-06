import { useDispatch, useSelector } from "react-redux";
import { updateColorPosition } from "../../features/gradient";

export default function RangeColorPosition() {
  const dispatch = useDispatch();
  const gradientValues = useSelector((state) => state.gradient);

  const selectedColorPosition = gradientValues.colors.find(
    (obj) => obj.id === gradientValues.pickedColorId
  );

  return (
    <input
      onChange={(e) => dispatch(updateColorPosition(e.target.value))}
      value={selectedColorPosition.position}
      className="w-full h-1 mb-10 cursor-pointer bg-gray-400"
      type="range"
    />
  );
}
