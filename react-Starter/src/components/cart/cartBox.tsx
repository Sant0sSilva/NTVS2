"use client";

import { useOrderStore } from "@/store/orderStore";

const CartBox = () => {
  const drinks = useOrderStore((state) => state.order.drinks);
  const meal = useOrderStore((state) => state.order.meal);

  return (
    <div className="cartBox flex flex-col items-center boxParagraph p-3">
      {!drinks ? (
        <div>Fill the void...</div>
      ) : (
        <div className="flex justify-evenly w-full">
          <div className=" flex flex-col">
            <div>
              <p className="text-xl font-semibold">Qty</p>
              {drinks.map((drink, index) => {
                if (drink.quantity > 0) {
                  return <p key={index}>{drink.quantity}</p>;
                }
              })}
            </div>
          </div>
          <div>
            <p className="cartBoxFont">Item</p>

            {drinks.map((drink, index) => {
              return <p key={index}>{drink.strDrink}</p>;
            })}
            <div></div>
            {meal.strMeal && (
              <div>
                <p className="text-center">---Meal---</p>
                {`${meal.strMeal}`}
                <p className="text-center">$29.99</p>
              </div>
            )}
          </div>
          <div>
            <p className="cartBoxFont">Price</p>
            {drinks.map((drink, index) => {
              return <p key={index}>${(9.99 * drink.quantity).toFixed(2)}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBox;
