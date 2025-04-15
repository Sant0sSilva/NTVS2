"use client";
import AddExpense from "@/Components/addExpense/AddExpenseForm";
import Stats from "@/Components/addExpense/Stats";
import { ExpenseList } from "@/Components/expenseList/ExpenseList";
import { Expense } from "@/app/page";

type ExpenseAppProps = {
  expenses: Expense[];
  count: number;
  sum: number;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const ExpenseApp = ({ sum, count, setExpenses, expenses }: ExpenseAppProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col h-lvh w-1/2 items-star ml-10">
        {/* Input form */}
        <AddExpense setExpenses={setExpenses} expenses={expenses} />
        {/* Stats Component */}
        <Stats sum={sum} count={count} />
      </div>
      <div className=" h-lvh w-1/2 items-center  ">
        <div className="flex flex-col items-center p-12">
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseApp;
