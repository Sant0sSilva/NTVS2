import React from "react";
import type { Expense } from "@/app/types/ExpenseType";
import api from "@/app/api/api";

type ExpenseCardProps = {
  expense: Expense;
};

const onRemoveExpense = async (id: number) => {
  const response = await api.deleteExpenseById();
};

const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  return (
    <div className="flex shadow-lg bg-white w-[325px] mx-10 p-3 justify-between text-xs rounded">
      <div className="flex items-center">
        <p className="text-black font-semibold">{expense.name}</p>
        <p className="text-black mx-1"> - </p>
        <p className="text-blue-600">${expense.cost}</p>
      </div>
      <button
        onClick={onRemoveExpense}
        className="text-red-500 outline outline-red-600 rounded p-2 px-3 hover:cursor-pointer hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseCard;
