"use client";

import { useEffect, useRef, useState } from "react";

const heavyFibonacci = (n: number): number => {
  if (n <= 1) return n;
  return heavyFibonacci(n - 1) + heavyFibonacci(n - 2);
};

const Home = () => {
  const [words, setWords] = useState("");
  const inputValueRef = useRef("");
  console.log("rendering");

  // useEffect(() => {
  //   inputValueRef.current = words;
  // }, [words]);

  // console.log("Finished rendering", heavyFibonacci(40));
  return (
    <div className="p-10">
      <p>Home</p>
      <input
        type="text"
        className="border rounded"
        onChange={(e) => (inputValueRef.current = e.target.value)}
      />
      <button className="ml-2" onClick={() => setWords(inputValueRef.current)}>
        Submit Value
      </button>
      <p className="mt-3">{inputValueRef.current} </p>
    </div>
  );
};

export default Home;
