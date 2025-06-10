"use client";

import { useOrderStore } from "@/store/orderStore";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type DropdownButtonProps = {
  buttonText: string;
  toggleDropdown: boolean;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownButton = (props: DropdownButtonProps) => {
  const selectedTime = useOrderStore((state) => state.order.time);

  return (
    <div
      onClick={() => {
        props.setToggleDropdown((prev) => !prev);
        // could i use a universal toggle function?
      }}
      className={`flex justify-around items-center border border-bitsGreen-500 gap-2 w-full hover:cursor-pointer rounded-xs mt-2 ${
        props.toggleDropdown && "outline outline-bitsGreen-300"
      }`}
    >
      {props.buttonText}

      <p>{selectedTime}</p>
      {props.toggleDropdown ? <FaChevronUp /> : <FaChevronDown />}
    </div>
  );
};

export default DropdownButton;
