import React from "react";
import type { Drink } from "@/types/drinkTypes";

type ReceiptItemProps = {
  drink: Drink;
};

const ReceiptItem = (props: ReceiptItemProps) => {
  return (
    <div className="w-full">
      <ol className="flex justify-around boxParagraph">
        <div className="itemBox">
          <li>{props.drink.quantity}</li>
        </div>
        <div className="itemBox">
          <li>{props.drink.strDrink}</li>
        </div>
        <div className="itemBox">
          <li>$9</li>
        </div>
      </ol>
    </div>
  );
};

export default ReceiptItem;
