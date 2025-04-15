"use client";

import React from "react";
import ItemCard from "./ItemCard";
import { Expense } from "@/app/page";

type ExpenseListProps = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

export const ExpenseList = ({ expenses, setExpenses }: ExpenseListProps) => {
  return (
    <div>
      <ul>
        {expenses.map((expense: Expense) => (
          <li className="mb-2" key={expense.id}>
            <ItemCard expense={expense} setExpenses={setExpenses} />
          </li>
        ))}
      </ul>
    </div>
  );
};
