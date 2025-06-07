"use client";

import DropdownButton from "./dropdownButton/DropdownButton";
import DropdownContent from "./droppdownContent/DropdownContent";
import React, { useState } from "react";

type TimeDropdownProps = {
  buttonText: string;
  content: React.ReactNode;
};

export const TimeDropdown = (props: TimeDropdownProps) => {
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
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
          content={props.content}
        />
        {/* )} */}
      </div>
    </div>
  );
};
