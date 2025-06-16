"use client";

import React from "react";
import type { Drink } from "@/types/drinkTypes";
import type { Meal } from "@/types/mealTypes";
import { useOrderStore } from "@/store/orderStore";

type ReceiptTotalProps = {
  drink: Drink[];
  meal: Meal;
};

const ReceiptTotal = (props: ReceiptTotalProps) => {
  const drinks = useOrderStore((state) => state.order.drinks);
  const quantity = useOrderStore((state) => state.order.guests);

  const getTotal = () => {
    if (props.meal.strMeal) {
      const drinksTotal = drinks.reduce((acc, drink) => {
        return acc + 9.99 * drink.quantity;
      }, 0);
      const mealTotal = 29.99 * quantity;
      return drinksTotal + mealTotal;
    } else {
      return 0;
    }
  };

  const total = getTotal();

  if (!props.meal.strMeal) {
    return <div></div>;
  }

  return (
    <div className="boxParagraph flex text-xl w-full gap-2">
      <p className="cartBoxFont">total:</p>
      <p> ${total} </p>
    </div>
  );
};

export default ReceiptTotal;
