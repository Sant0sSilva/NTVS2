import { generateTimes } from "@/utilities/timeUtilities";
import React from "react";
import DropdownItem from "../dropdownItem/DropdownItem";
import { useOrderStore } from "@/store/orderStore";

type DropdownContentProps = {
  toggleDropdown: boolean;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContent = (props: DropdownContentProps) => {
  const selectedTime = useOrderStore((state) => state.order.time);
  // const setSelectedTime = useOrderStore((state) => state.setSelectedTime);

  return (
    <div
      className={`
          transform transition-all duration-500 ease-in-out absolute flex flex-col min-w-[100%] items-center max-h-[30vh] overflow-y-scroll no-scrollbar border border-bitsGreen-500 bg-bitsGreen-500/50 rounded-xs
          ${
            props.toggleDropdown
              ? " translate-y-2 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
          }
      }`}
    >
      {generateTimes(10).map((time, index) => {
        return (
          <DropdownItem
            setToggleDropdown={props.setToggleDropdown}
            selectedTime={selectedTime}
            // setSelectedTime={setSelectedTime}
            key={index}
            time={time}
          />
        );
      })}
    </div>
  );
};

export default DropdownContent;
