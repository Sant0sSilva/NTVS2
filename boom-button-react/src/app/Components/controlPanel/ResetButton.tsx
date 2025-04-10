"use client";

// import { useState } from "react";

type ResetButtonProps = {
  setLimit: (newLimit: number) => void;
  setIncrement: (newIncrement: number) => void;
  setCount: (newIncrement: number) => void;
};

const ResetButton = ({
  setLimit,
  setIncrement,
  setCount,
}: ResetButtonProps) => {
  // const [limitInput, setLimitInput] = useState<number>();
  // const [incrementInput, setIncrementInput] = useState<number>();

  const onResetButton = () => {
    setLimit(35);
    setIncrement(5);
    setCount(0);
  };

  return (
    <div className="flex m-4 justify-center">
      <button
        onClick={onResetButton}
        id="resetButton"
        className="border-2 px-12 py-2 bg-red-500 text-white font-bold text-4xl rounded-2xl hover:bg-red-800"
      >
        RESET
      </button>
    </div>
  );
};
export default ResetButton;
