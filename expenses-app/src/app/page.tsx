"use client";

import { useState } from "react";
import ExpenseApp from "./ExpenseApp";

// const getSumOfCost = (arr: Expense[]): number => {
//   return arr.reduce((total, item) => total + item.cost, 0);
// };

export type Expense = {
  name: string;
  cost: number;
  id: number;
};

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

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
