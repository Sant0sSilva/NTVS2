"use client";

import { ChangeEvent, useState, KeyboardEvent } from "react";

const TypeInputter = () => {
  const [inputValue, setInputValue] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    setLastKey(e.key);
    setIsHidden(false);
  };

  return (
    <div className="flex flex-col space-y-6 mt-6 px-32">
      <div>
        <input
          placeholder="Shrek !!"
          type="text"
          className="min-w-50 max-w-50 rounded-md bg-white py-2 mx-10 indent-4 focus:outline-green-500 outline-2  outline-gray-300 text-black"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className="break-words">
        <p className="text-green-900 mx-10 text-xl max-w-50 max-h-25 overflow-auto">
          You typed:{inputValue}
        </p>
        <p className={`text-green-600 mx-10 text-xl ${isHidden && "hidden"}`}>
          Last key pressed:{lastKey}
        </p>
      </div>
    </div>
  );
};

export default TypeInputter;
