import type { Drink } from "@/types/drinkTypes";
import { useState } from "react";

type DrinkItemProps = {
  Drink: Drink;
  index: number;
};

const DrinkItem = ({ Drink, index }: DrinkItemProps) => {
  const [clickIndex, setClickIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="drinkBox flex flex-col boxParagraph items-center justify-end hover:cursor-pointer">
        {clickIndex === index && (
          <div
            className=" flex absolute w-[10rem] h-[10rem]  bg-black opacity-50 hover:cursor-pointer justify-center items-center rounded-t-md"
            onClick={() => {
              setClickIndex(null);
            }}
          >
            <img
              className="object-cover h-[50px] w-[50px]"
              src="images/red-check-mark.png"
              alt=""
            />
          </div>
        )}
        <img
          onClick={() => {
            setClickIndex(index);
            console.log(Drink);
          }}
          src={`${Drink.strDrinkThumb}/small`}
          alt={Drink.strDrink}
          className="rounded-t-md"
        />
      </div>
      <div className="drinkInfoBox boxParagraph ">
        <p>{Drink.strDrink}</p>
        <p>$9.90</p>
      </div>
    </div>
  );
};

export default DrinkItem;
