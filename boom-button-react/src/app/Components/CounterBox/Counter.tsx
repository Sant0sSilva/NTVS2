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
    <div className=" m-10 shadow-2xl shadow-black rounded-2xl bg-yellow-100">
      <div>
        {/* Number divide */}
        <div className="flex justify-center align-middle m-6">
          <p className="h-[6rem] m-10 p-10 text-9xl font-bold text-black">
            {count}
          </p>
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

export default Counter;
