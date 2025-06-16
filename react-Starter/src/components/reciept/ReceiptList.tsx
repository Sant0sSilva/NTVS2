import React from "react";
import ReceiptItem from "./ReceiptItem";
import { useOrderStore } from "@/store/orderStore";
import ReceiptMealItem from "./ReceiptMealItem";
import ReceiptTotal from "./ReceiptTotal";

const ReceiptList = () => {
  const drinks = useOrderStore((state) => state.order.drinks);
  const meal = useOrderStore((state) => state.order.meal);

  if (!drinks) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col justify-around">
      {drinks ? (
        drinks.map((drink) => {
          console.log("Here", drink.idDrink, drink.quantity, drink.strDrink);
          return <ReceiptItem key={drink.idDrink} drink={drink} />;
        })
      ) : (
        <div>Loading.....</div>
      )}
      {meal.strMeal && <ReceiptMealItem meal={meal} />}
      <ReceiptTotal drink={drinks} meal={meal} />
    </div>
  );
};

export default ReceiptList;
