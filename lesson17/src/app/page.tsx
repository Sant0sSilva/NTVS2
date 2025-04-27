"use client";

import Counter, { CounterRef } from "@/Components/Counter";
import { useRef } from "react";

// import { useEffect, useRef, useState } from "react";

// const heavyFibonacci = (n: number): number => {
//   if (n <= 1) return n;
//   return heavyFibonacci(n - 1) + heavyFibonacci(n - 2);
// };

// const Home = () => {
//   const [words, setWords] = useState("");
//   const inputValueRef = useRef("");
//   console.log("rendering");

//   // useEffect(() => {
//   //   inputValueRef.current = words;
//   // }, [words]);

//   // console.log("Finished rendering", heavyFibonacci(40));
//   return (
//     <div className="p-10">
//       <p>Home</p>
//       <input
//         type="text"
//         className="border rounded"
//         onChange={(e) => (inputValueRef.current = e.target.value)}
//       />
//       <button className="ml-2" onClick={() => setWords(inputValueRef.current)}>
//         Submit Value
//       </button>
//       <p className="mt-3">{inputValueRef.current} </p>
//     </div>
//   );
// };

// export default Home;

function Demo() {
  const counterRef = useRef<CounterRef>(null);

  return (
    <div>
      <div className="mb-2"></div>
      <Counter ref={counterRef} />
      <button
        className="m-4 border-2 p-2 rounded-full"
        onClick={() => counterRef.current?.reset()}
      >
        Reset From Parent
      </button>
    </div>
  );
}
export default Demo;
