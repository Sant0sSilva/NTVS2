"use client";
import ControlPanel from "./Components/controlPanel/ControlPanel";
import IncrementBox from "./Components/CounterBox/IncrementBox";
import { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(5);
  const [limit, setLimit] = useState(35);
  const [showBoom, setShowBoom] = useState(false);

  const onIncrementClick = () => {
    setCount((s) => s + increment);
  };
  const onDecrementClick = () => {
    setCount((s) => s - increment);
  };

  useEffect(() => {
    if (count === limit || count === -limit) {
      setShowBoom(true);
    } else {
      setShowBoom(false);
    }
  });

  return (
    <div className="bg-gray-200 flex justify-center h-screen items-center text-black overflow-auto">
      <div className="items-center">
        <ControlPanel
          setIncrement={setIncrement}
          setLimit={setLimit}
          limit={limit}
          increment={increment}
          setCount={setCount}
        />
        <IncrementBox
          count={count}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
          limit={limit}
          showBoom={showBoom}
        />
      </div>
    </div>
  );
};

export default Home;
