"use client";
import { useState } from "react";

type CustomInputsProps = {
  setLimit: (newLimit: number) => void;
  setIncrement: (newIncrement: number) => void;
};

const CustomInputs = ({ setLimit, setIncrement }: CustomInputsProps) => {
  const [limitInput, setLimitInput] = useState<string>("");
  const [incrementInput, setIncrementInput] = useState<string>("");

  const onCustomLimitClick = () => {
    const input = parseInt(limitInput);
    if (!isNaN(input)) {
      setLimit(input);
      setLimitInput("");
    } else {
      setLimit(35);
      setLimitInput("");
    }
  };
  const onCustomIncrementClick = () => {
    const input = parseInt(incrementInput);
    setIncrement(input);
    setIncrementInput("");
    if (!isNaN(input)) {
      setIncrement(input);
      setIncrementInput("");
    } else {
      setIncrement(5);
      setIncrementInput("");
    }
  };
  return (
    <div className="flex space-between">
      <div>
        <div className="m-4">
          <p className="flex justify-center my-2">Enter custom limit number</p>
          <input
            placeholder="0"
            value={limitInput}
            onChange={(e) => setLimitInput(e.target.value)}
            type="number"
            className="border-1 border-black mx-12 rounded-2xl bg-gray-100 px-2"
          />
          <br />
          <button
            onClick={onCustomLimitClick}
            className="m-2 mx-12 border-1 px-4 rounded-2xl bg-amber-200 hover:bg-amber-400"
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <div className="m-4">
          <p className="flex justify-center my-2">
            Enter custom increment number
          </p>
          <input
            placeholder="0"
            value={incrementInput}
            onChange={(e) => setIncrementInput(e.target.value)}
            type="number"
            className="border-1 border-black mx-12 rounded-2xl bg-gray-100 px-2"
          />
          <br />
          <button
            onClick={onCustomIncrementClick}
            className="m-2 mx-12 border-1 px-4 rounded-2xl bg-amber-200 hover:bg-amber-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default CustomInputs;
