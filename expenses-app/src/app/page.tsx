"use client";

import { useState } from "react";
import ExpenseApp from "./ExpenseApp";

// const getSumOfCost = (arr: Expense[]): number => {
//   return arr.reduce((total, item) => total + item.cost, 0);
// };

type Expense = {
  name: string;
  cost: number;
  id: number;
};

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      name: "sofa",
      cost: 1500,
      id: 1,
    },
    {
      name: "wardrobe",
      cost: 1000,
      id: 2,
    },
    {
      name: "bed",
      cost: 3200,
      id: 3,
    },
  ]);

  const sum = expenses.reduce((total, item) => total + item.cost, 0);
  const count = expenses.length;
  return (
    <ExpenseApp
      sum={sum}
      count={count}
      setExpenses={setExpenses}
      expenses={expenses}
    />
  );
};

export default Home;
