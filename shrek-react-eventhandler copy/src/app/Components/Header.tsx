"use client";

import { useState } from "react";

const Header = () => {
  const [isBig, setIsBig] = useState(false);

  return (
    <div>
      <header className=" flex flex-col items-center p-6 rounded-t-2xl text-green-900">
        <img
          onFocus={() => {}}
          onMouseOver={() => {
            setIsBig(true);
          }}
          onMouseOut={() => {
            setIsBig(false);
          }}
          src="\shrek.jpg"
          alt="Shrek image"
          className={`p-4 rounded-full ${
            isBig && "scale-120"
          } transition duration-300`}
        />
        <h1 className="font-bold text-4xl">Welcome to Shrek's Swamp!</h1>
      </header>
    </div>
  );
};
export default Header;
