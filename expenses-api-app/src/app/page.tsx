"use client";

import { useEffect, useState } from "react";
import AddExpenseCard from "./components/addExpense/AddExpenseCard";
import ExpensesList from "./components/expensesList/ExpensesList";
import type { Expense } from "@/app/types/ExpenseType";
import api from "@/app/api/api";

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const getExpensesOnMount = async () => {
      const expensesResponse = await api.getExpenses();

      setExpenses(expensesResponse);
    };
    getExpensesOnMount();
  }, []);

  if (!expenses) {
    return (
      <div className="p-20 text-white text-5xl">
        <p>Loading....</p>
      </div>
    );
  }
  return (
    <div className="flex  justify-center gap-10 h-screen">
      <div className="flex flex-col gap-5">
        <div className="mt-5">
          <h1 className="text-blue-700 text-3xl font-bold text-center my-5">
            Expense Tracker
          </h1>
        </div>

        <AddExpenseCard expenses={expenses} setExpenses={setExpenses} />
        <ExpensesList expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
};

export default Home;
