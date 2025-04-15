import { useState } from "react";
import { Expense } from "@/app/page";

type ItemCardProps = {
  expense: Expense;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const ItemCard = ({ expense, setExpenses }: ItemCardProps) => {
  const [isFading, setIsFading] = useState(false);
  const onRemoveExpense = () => {
    setIsFading(true);
    setTimeout(() => {
      setExpenses((prev) => prev.filter((e) => e.id !== expense.id));
    }, 1000);
  };

  return (
    <div
      className={`flex border-2 border-teal-300 w-84 ${
        isFading ? "fadeOut" : "fadeIn"
      }`}
    >
      <div className="w-3/5 my-4 mx-4">
        <p>
          <strong>Name: </strong> {expense.name}
        </p>
        <p>
          <strong>Cost: </strong> {expense.cost}
        </p>
      </div>
      <div className="flex flex-col w-2/5 items-end">
        <button onClick={onRemoveExpense} className="m-1">
          ❌
        </button>
      </div>
    </div>
  );
};
export default ItemCard;
