"use client";

import { useOrderStore } from "@/store/orderStore";
// import { useState } from "react";
import React from "react";

const GuestSelector = () => {
  // const [guests, setGuests] = useState<number>(0);
  const guests = useOrderStore((state) => state.order.guests);
  const guestsDecrement = useOrderStore((state) => state.guestDecrement);
  const guestIncrement = useOrderStore((state) => state.guestIncrement);

  return (
    <div className="flex flex-col items-center">
      <p className="boxParagraph text-2xl ">Guests</p>
      <div className="flex gap-4">
        <button
          className="incrementIcon"
          disabled={guests == 1}
          onClick={() => {
            guestsDecrement();
          }}
        >
          –
        </button>
        <p className="text-bitsRed-500 text-4xl">{guests} </p>
        <button
          className="incrementIcon"
          disabled={guests == 12}
          onClick={() => {
            guestIncrement();
          }}
        >
          +
        </button>
      </div>
      {guests == 12 && (
        <p className="boxParagraph">
          For parties larger than 12 please email us!
        </p>
      )}
    </div>
  );
};

export default GuestSelector;
