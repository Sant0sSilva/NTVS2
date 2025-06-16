import type { Drink, APIDrink } from "@/types/drinkTypes";
import { useState } from "react";
import DrinkQuantitySelector from "./DrinkQuantitySelector";
import { useOrderStore } from "@/store/orderStore";

type DrinkItemProps = {
  drink: APIDrink;
  index: number;
};

const DrinkItem = (props: DrinkItemProps) => {
  const [clickIndex, setClickIndex] = useState<number | null>(null);
  const [drinkAdded, setDrinkAdded] = useState<boolean>(false);
  const [drinkQuantity, setDrinkQuantity] = useState<number>(0);

  const addDrink = useOrderStore((state) => state.addDrink);
  const removeDrink = useOrderStore((state) => state.removeDrink);

  const onAddDrink = () => {
    addDrink(props.drink as Drink, drinkQuantity);
    setDrinkAdded(true);
  };

  const onRemoveDrink = () => {
    removeDrink(props.drink.idDrink);
    setDrinkAdded(false);
  };

  return (
    <div>
      <div className="drinkBox flex flex-col boxParagraph items-center justify-end hover:cursor-pointer">
        {clickIndex === props.drink.idDrink && (
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
            setClickIndex(props.drink.idDrink);
            setDrinkQuantity(1);
          }}
          src={`${props.drink.strDrinkThumb}`}
          alt={props.drink.strDrink}
          className="rounded-t-md"
        />
      </div>
      {clickIndex === props.drink.idDrink && (
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
        <p>{props.drink.strDrink}</p>
        <p>$9.90</p>
      </div>
    </div>
  );
};

export default DrinkItem;
