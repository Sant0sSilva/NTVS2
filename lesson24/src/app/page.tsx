"use client";
import { create } from "zustand";
import { useCounterStore } from "./store";
import { useEffect } from "react";

// const setCount = () => {
//   useCounterStore.setState({ count: 1 });
// };
// const logCount = () => {
//   const count = useCounterStore.getState().count;
//   console.log("count", count);
// };

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  // useEffect(() => {
  //   // logCount();
  //   setCount();
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-4xl gap-2">
      {count}
      <div className="flex flex-col gap-2">
        <button
          className="border-2 px-1 border-yellow-700 bg-green-800 hover:bg-green-700 rounded-xs "
          onClick={increment}
        >
          increment
        </button>
        <button
          className="border-2 px-1 border-yellow-700 bg-green-800 hover:bg-green-700 rounded-xs "
          onClick={decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
};
const Home = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

export default Home;
/*
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

const Home = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <>
      <h1 className="text-white">{bears} bears around here...</h1>
      <button type="button" onClick={increasePopulation}>
        one up
      </button>
    </>
  );
};

*/
