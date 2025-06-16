import React from "react";

import type { Meal } from "@/types/mealTypes";
import { useOrderStore } from "@/store/orderStore";

type ReceiptMealItemProps = {
  meal: Meal;
};

const ReceiptMealItem = (props: ReceiptMealItemProps) => {
  const quantity = useOrderStore((state) => state.order.guests);

  return (
    <div className="w-full boxParagraph">
      <p className="text-center">---Meal---</p>
      <ol className="flex justify-around">
        <div className="itemBox">
          <li>{quantity}</li>
        </div>
        <div className="itemBox">
          <li>{props.meal.strMeal}</li>
        </div>
        <div className="itemBox">
          <li>${(29.99 * quantity).toFixed(2)}</li>
        </div>
      </ol>
    </div>
  );
};

export default ReceiptMealItem;
