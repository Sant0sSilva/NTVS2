import { useEffect, useState } from "react";

type CounterProp = {
  count: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  limit: number;
};

const Counter = ({
  count,
  onIncrementClick,
  onDecrementClick,
  limit,
}: CounterProp) => {
  return (
    <div className=" w-xl m-10 shadow-2xl shadow-black rounded-2xl bg-yellow-100">
      <div>
        {/* Number divide */}
        <div className="flex justify-center align-middle m-6">
          <p className="h-[6rem] m-10 p-10 text-9xl font-bold">{count}</p>
        </div>
        {/* Increment buttons */}
        <div className="flex justify-evenly">
          <button
            onClick={onIncrementClick}
            className="font-extrabold text-6xl m-4 w-[6rem] h-[6rem] bg-green-600 text-white hover:bg-green-800 rounded-2xl"
            disabled={count >= limit}
          >
            +
          </button>
          <button
            onClick={onDecrementClick}
            className="font-extrabold text-6xl m-4 w-[6rem] h-[6rem] bg-red-600 text-white hover:bg-red-800 rounded-2xl"
            disabled={count <= -limit}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

const IncrementBox = () => {
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
    <div className="flex-col">
      <div>
        <Counter
          count={count}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
          limit={limit}
        />
      </div>
      <div className="h-20">
        <div
          className={`text-9xl text-center bg-purple-500 text-white p-4 rounded-2xl ${
            showBoom ? "" : "hidden"
          } `}
        >
          !bOoMm!
        </div>
      </div>
    </div>
  );
};

export default IncrementBox;
