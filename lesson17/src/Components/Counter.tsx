import { forwardRef, Ref, useImperativeHandle, useState } from "react";

export type CounterRef = {
  reset: () => void;
};

interface CounterProps {}

function Counter(props: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <h1 className="text-2xl m-4">Count: {count} </h1>
      <button onClick={decrement} className="mx-4 border-2 p-2 rounded-3xl">
        Decrement
      </button>
      <button onClick={increment} className="mx-4 border-2 p-2 rounded-3xl">
        Increment
      </button>
    </div>
  );
}
export default forwardRef(Counter);
