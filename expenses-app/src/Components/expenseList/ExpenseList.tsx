"use client";

import React from "react";
import ItemCard from "./ItemCard";

type Expense = {
  name: string;
  cost: number;
  id: number;
};

type ExpenseListProps = {
  expenses: Expense[];
};

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div>
      <ul>
        {expenses.map((expense: Expense) => (
          <li className="mb-2" key={expense.id}>
            <ItemCard expense={expense} />
          </li>
        ))}
      </ul>
    </div>
  );
};
