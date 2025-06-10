import type { Drink, APIDrink } from "@/types/drinkTypes";
import { useEffect, useState } from "react";
import DrinkQuantitySelector from "./DrinkQuantitySelector";
import { useOrderStore } from "@/store/orderStore";

type DrinkItemProps = {
  drink: Drink;
  index: number;
};

const DrinkItem = ({ drink, index }: DrinkItemProps) => {
  const [clickIndex, setClickIndex] = useState<number | null>(null);
  const [drinkAdded, setDrinkAdded] = useState<boolean>(false);
  const [drinkQuantity, setDrinkQuantity] = useState<number>(0);

  const addDrink = useOrderStore((state) => state.addDrink);
  const removeDrink = useOrderStore((state) => state.removeDrink);

  const onAddDrink = () => {
    addDrink(drink, drinkQuantity);
    setDrinkAdded(true);
  };

  const onRemoveDrink = () => {
    removeDrink(drink.idDrink);
    setDrinkAdded(false);
  };

  return (
    <div>
      <div className="drinkBox flex flex-col boxParagraph items-center justify-end hover:cursor-pointer">
        {clickIndex === index && (
          <div className=" flex flex-col justify-end absolute w-[10rem] h-[10rem]  bg-black/70 hover:cursor-pointer  items-center rounded-t-md">
            <img
              className="object-cover h-2/3 w-2/3 p-8"
              src="images/red-check-mark.png"
              alt="Checked!"
              onClick={() => {
                onRemoveDrink();
                setClickIndex(null);
                setDrinkQuantity(0);
              }}
            />
            {drinkAdded ? (
              <p className="text-bitsRed-500 text-4xl mb-2">{drinkQuantity}</p>
            ) : (
              <DrinkQuantitySelector
                drinkQuantity={drinkQuantity}
                setDrinkQuantity={setDrinkQuantity}
              />
            )}
          </div>
        )}
        <img
          onClick={() => {
            setClickIndex(index);
            setDrinkQuantity(1);
          }}
          src={`${drink.strDrinkThumb}`}
          alt={drink.strDrink}
          className="rounded-t-md"
        />
      </div>
      {clickIndex === index && (
        <div
          onClick={() => {
            onAddDrink();
          }}
          className="bg-red-800/40 text-center text-bitsYellow-500 font-semibold hover:bg-red-700/50 hover:cursor-pointer"
        >
          {drinkAdded ? "Drink added!" : "Add Drink"}
        </div>
      )}
      <div className="drinkInfoBox boxParagraph ">
        <p>{drink.strDrink}</p>
        <p>$9.90</p>
      </div>
    </div>
  );
};

export default DrinkItem;
