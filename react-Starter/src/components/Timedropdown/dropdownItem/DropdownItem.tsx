"use client";

import { useOrderStore } from "@/store/orderStore";

type DropdownItemProps = {
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTime: string;
  // setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  time: string;
};

const DropdownItem = (props: DropdownItemProps) => {
  const setSelectedTime = useOrderStore((state) => state.setSelectedTime);
  return (
    <div
      onClick={() => {
        setSelectedTime(props.time);
        props.setToggleDropdown((prev) => !prev);
      }}
      className="hover:cursor-pointer hover:bg-bitsGreen-300 rounded-xl duration-300 px-2 py-1"
    >
      {props.time}
    </div>
  );
};

export default DropdownItem;
