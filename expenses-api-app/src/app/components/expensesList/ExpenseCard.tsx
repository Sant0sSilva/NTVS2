import React from "react";
import type { Expense } from "@/app/types/ExpenseType";
import api from "@/app/api/api";

type ExpenseCardProps = {
  expense: Expense;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const ExpenseCard = ({ expense, setExpenses }: ExpenseCardProps) => {
  const deleteExpense = async (id: number) => {
    try {
      await api.deleteExpenseById(id);
      const updatedExpenses = await api.getExpenses();
      setExpenses(updatedExpenses);
    } catch (error: any) {
      const nodeError: NodeJS.ErrnoException = error;
      return nodeError;
    }
  };

  const onRemoveExpense = (expense: Expense) => {
    deleteExpense(expense.id);
  };

  return (
    <div className="flex shadow-lg bg-white w-[325px] mx-10 p-3 justify-between text-xs rounded">
      <div className="flex items-center">
        <p className="text-black font-semibold">{expense.name}</p>
        <p className="text-black mx-1"> - </p>
        <p className="text-blue-600">${expense.cost}</p>
      </div>
      <button
        onClick={() => onRemoveExpense(expense)}
        className="text-red-500 outline outline-red-600 rounded p-2 px-3 hover:cursor-pointer hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseCard;
