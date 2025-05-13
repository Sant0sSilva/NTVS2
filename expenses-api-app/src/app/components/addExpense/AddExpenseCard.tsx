import React, { useState } from "react";
import type { Expense, New_Expense_Item } from "@/app/types/ExpenseType";
import api from "@/app/api/api";

type AddExpenseCardProps = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const AddExpenseCard = ({ expenses, setExpenses }: AddExpenseCardProps) => {
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const postNewExpense = async (newExpense: New_Expense_Item) => {
    try {
      await api.createExpense(newExpense);
      const updatedExpenses = await api.getExpenses();
      setExpenses(updatedExpenses);
    } catch (error: any) {
      const nodeError: NodeJS.ErrnoException = error;
      return nodeError;
    }
  };

  const onSubmitPost = async (e) => {
    const costNUM = Number(cost);
    e.preventDefault();
    if (!name || !cost || isNaN(costNUM)) {
      console.log("Error");
      return;
    } else {
      const newExpense: New_Expense_Item = {
        name,
        cost: costNUM,
      };
      postNewExpense(newExpense);

      setName("");
      setCost("");
    }
  };

  return (
    <div className="flex flex-col w-[325px]  gap-3 shadow-lg p-4 mx-10 rounded bg-white">
      <h2 className=" text-black font-semibold">Add New Expense</h2>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense Name"
        className="p-1 text-black placeholder:text-gray-400 placeholder:font-extralight text-xs outline-1 outline-gray-300 focus:outline-blue-500 rounded"
        type="text"
      />
      <input
        id="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Cost"
        className="p-1 text-black placeholder:text-gray-400 text-xs outline-1 outline-gray-300 focus:outline-blue-500 rounded"
        type="Number"
      />
      <button
        onClick={onSubmitPost}
        className="bg-blue-800 hover:bg-blue-700 hover:cursor-pointer rounded py-2 text-xs"
      >
        Add Expense
      </button>
    </div>
  );
};

export default AddExpenseCard;

// const onSubmitPost = (e) => {
//   const costNum = Number(cost);
//   e.preventDefault();
//   if (!name || !cost || isNaN(costNum)) {
//     console.log("Error");
//     return;
//   } else {
//     console.log("submission:", expenses);
//     const newExpense = { id: expenses.length + 1, name, cost: costNum };

//     fetch("http://localhost:3001/api/create-expense", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(newExpense),
//     });
//     setName("");
//     setCost("");
//     setExpenses((prev) => [...prev, newExpense]);
//   }
// };
