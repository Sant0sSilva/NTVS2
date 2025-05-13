"use client";

import { useEffect, useState } from "react";

type Expense = {
  id: number;
  name: string;
  const: string;
};

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[] | null>(null);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const url = "localHost:3001/api/expenses";
        const response = await fetch(url);
        if (response.status != 200) {
          throw new Error(`Error: ${response.status}`);
        }
        const json: Expense[] = await response.json();
        return json;
      } catch (error: any) {
        const nodeError: NodeJS.ErrnoException = error;
        return nodeError;
      }
    };
    const getExpensesInner = async () => {
      const expenses = await getExpenses();
      setExpenses(expenses);
    };
    getExpensesInner();
  }, []);

  if (!expenses) {
    return (
      <div className="p-20">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{expenses[0].id}</h1>
    </div>
  );
};

export default Home;
