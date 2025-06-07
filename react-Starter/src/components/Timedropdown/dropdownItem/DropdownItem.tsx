"use client";

import React, { useState } from "react";

type DropdownItemProps = {
  time: string;
};

const DropdownItem = (props: DropdownItemProps) => {
  const [time, setTime] = useState<string>("");

  return (
    <div
      onClick={() => {
        setTime(props.time);
        console.log(time);
      }}
      className="hover:cursor-pointer hover:bg-bitsGreen-300 rounded-xl duration-300 px-2 py-1"
    >
      {props.time}
    </div>
  );
};

export default DropdownItem;
