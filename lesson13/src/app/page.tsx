"use client";

import { useState } from "react";

type CounterProps = {
  count: number;
  onClick: () => void;
};

// ComponentNames: PascalCase.
// propNames: camelCase(except when the property is an actualy component itself).

const Counter = ({ count, onClick }: CounterProps) => {
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={onClick}>
        Counter
      </button>
    </div>
  );
};

const CounterParent = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((s) => s + 1);
  };

  return (
    <div className="bg-green-500">
      <Counter count={count} onClick={onClick} />
    </div>
  );
};

export default CounterParent;
