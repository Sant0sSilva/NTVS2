import React from "react";
import ExpenseCard from "./ExpenseCard";
import type { Expense } from "@/app/types/ExpenseType";

type ExpensesListProps = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

function ExpensesList({ expenses, setExpenses }: ExpensesListProps) {
  return (
    <>
      <div className="text-black mx-10 font-semibold">Your Expenses</div>
      {expenses.map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            setExpenses={setExpenses}
          />
        );
      })}
    </>
  );
}

export default ExpensesList;
