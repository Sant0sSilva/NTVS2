"use client";

import { useState } from "react";

type AddExpenseProp = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};
type Expense = {
  name: string;
  cost: number;
  id: number;
};

const AddExpense = ({ setExpenses, expenses }: AddExpenseProp) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  //   const onAddExpense = () => {
  //     const newExpense: Expense = {
  //       name,
  //       cost: Number(cost),
  //       id: Date.now(),
  //     };

  //     setExpenses = (prev) => [...prev, newExpense];

  //     setName("");
  //     setCost("");
  //     console.log("Added new expense", newExpense, "to:");
  //   };

  const onAddExpense = () => {
    const newExpense: Expense = {
      name,
      cost: Number(cost),
      id: Date.now(), // 👈 crude unique ID
    };

    setExpenses((prev) => [...prev, newExpense]); // ✅ actually adds it

    setName("");
    setCost("");
    console.log("Added:", newExpense, "to:", [...expenses]);
  };

  return (
    <div>
      <div>
        <h1 className="text-5xl text-teal-400 mt-15">Add Expense</h1>
      </div>
      <div className="flex flex-col items-start gap-4 m-5">
        <div className="flex items-center">
          <label htmlFor="name" className=" w-24 ">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="  bg-white focus:outline-blue-500 text-black"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="cost" className=" w-24">
            Cost
          </label>
          <input
            id="cost"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="bg-white focus:outline-blue-500 text-black"
          />
        </div>
        <button
          onClick={onAddExpense}
          className="bg-gray-200 text-black outline-1 px-1 py-1 text-2xl hover:bg-gray-400"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
