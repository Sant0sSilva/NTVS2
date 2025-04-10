"use client";

import { useState } from "react";

const Footer = () => {
  const [isBig, setIsBig] = useState(false);
  return (
    <div className="flex justify-center w-50 h-58">
      <img
        onFocus={() => {}}
        onMouseOver={() => {
          setIsBig(true);
        }}
        onMouseOut={() => {
          setIsBig(false);
        }}
        src="\donkey.jpg"
        alt="Donkey image"
        className={`${
          isBig && "scale-120"
        } rounded-full mt-8 transition duration-300`}
      />
    </div>
  );
};

export default Footer;
