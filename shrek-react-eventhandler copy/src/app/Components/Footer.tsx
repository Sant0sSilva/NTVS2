"use client";

import { useState } from "react";

const Footer = () => {
  const [isRotate, setIsRotate] = useState(false);
  return (
    <div className="flex justify-center w-50 h-58">
      <img
        onFocus={() => {}}
        onMouseOver={() => {
          setIsRotate(true);
        }}
        onMouseOut={() => {
          setIsRotate(false);
        }}
        src="\donkey.jpg"
        alt="Donkey image"
        className={`${
          isRotate && "rotate-12"
        } rounded-full mt-8 transition duration-300`}
      />
    </div>
  );
};

export default Footer;
