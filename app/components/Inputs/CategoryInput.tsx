"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  label: string;
  icon: IconType;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={` rounded-xl border-2 p-4 flex gap-2 hover:border-black transition cursor-pointer  my-1
      ${selected ? "border-black" : "border-neutral-200"} 
      `}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold ml-2 pt-1">{label}</div>
    </div>
  );
};

export default CategoryInput;