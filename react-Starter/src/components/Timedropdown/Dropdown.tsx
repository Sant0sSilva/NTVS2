"use client";

import { useOrderStore } from "@/store/orderStore";
import DropdownButton from "./dropdownButton/DropdownButton";
import DropdownContent from "./droppdownContent/DropdownContent";
import React, { useState } from "react";

type TimeDropdownProps = {
  buttonText: string;
};

export const TimeDropdown = (props: TimeDropdownProps) => {
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  // const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <div className="flex-col relative boxParagraph w-full">
      <div>
        <DropdownButton
          toggleDropdown={toggleDropDown}
          setToggleDropdown={setToggleDropDown}
          buttonText={props.buttonText}
        />
      </div>
      <div>
        {/* {toggleDropDown && ( */}
        <DropdownContent
          toggleDropdown={toggleDropDown}
          setToggleDropdown={setToggleDropDown}
        />
        {/* )} */}
      </div>
    </div>
  );
};
