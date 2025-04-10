"use client";

import { useState } from "react";

const shrekQuotes = [
  "Ogres are like onions... they have layers!",
  "What are you doing in my swamp?",
  "I'm like a crackin' onion!",
  "Better out than in, I always say!",
  "Donkey, I'm warning you!",
  "This is the part where you run away.",
];

// Random quote generator
const getQuoteRandomly = () => {
  const randomNumber = Math.floor(Math.random() * shrekQuotes.length);
  return shrekQuotes[randomNumber];
};

const QuoteGenerator = () => {
  const [isBig, setIsBig] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [quote, setQuote] = useState("");

  return (
    <div className="flex flex-col space-y-6">
      <div className="overflow-auto px-4">
        <p
          /////// Random quote display////////////////////////////////////////////
          className={`text-center text-2xl italic text-green-900 font-semibold ${
            isHidden ? "hidden" : ""
          }`}
        >
          {`"${quote}"`}
        </p>
      </div>
      <div className="flex flex-col space-y-6 items-center">
        <input
          placeholder="Donkey?"
          type="text"
          className="min-w-50 max-w-50 rounded-md bg-white py-2 mx-10 indent-4 focus:outline-green-500 outline-2  outline-gray-300"
        />
        {/* Button box */}
        <div className="flex h-24 justify-center">
          <button
            className={`${
              isBig && "scale-120"
            } bg-green-600 py-4 px-6 mx-10 rounded-md text-white text-xl font-semibold cursor-pointer m-4 hover:bg-green-800 transition duration-300`}
            onClick={() => {
              setQuote(getQuoteRandomly());
              setIsHidden(false);
            }}
            onFocus={() => {}}
            onMouseOver={() => {
              setIsBig(true);
            }}
            onMouseOut={() => {
              setIsBig(false);
            }}
          >
            Click Me For a Shrek Quote!
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuoteGenerator;
