import React from "react";

type DropdownContentProps = {
  content: React.ReactNode;
  toggleDropdown: boolean;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContent = (props: DropdownContentProps) => {
  return (
    <div
      className={`
          transform transition-all duration-300 ease-in-out absolute flex flex-col min-w-[100%] items-center max-h-[30vh] overflow-y-scroll no-scrollbar bg-bitsGreen-500/50 rounded-xs
          ${
            props.toggleDropdown
              ? " translate-y-2.5 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
          }
      }`}
    >
      {props.content}
    </div>
  );
};

export default DropdownContent;
