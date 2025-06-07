"use client";

import { useState } from "react";
import React from "react";

const GuestSelector = () => {
  const [guests, setGuests] = useState<number>(0);
  return (
    <div className="flex flex-col items-center">
      <p className="boxParagraph text-2xl ">Guests</p>
      <div className="flex gap-4">
        <button
          className="incrementIcon"
          onClick={() => {
            setGuests((prev) => prev - 1);
          }}
        >
          –
        </button>
        <p className="text-bitsRed-500 text-4xl">{guests} </p>
        <button
          className="incrementIcon"
          onClick={() => {
            setGuests((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestSelector;
