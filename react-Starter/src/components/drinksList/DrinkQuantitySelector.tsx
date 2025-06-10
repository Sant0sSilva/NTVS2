"use client";

type DrinkQuantitySelectorprops = {
  drinkQuantity: number;
  setDrinkQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const DrinkQuantitySelector = (props: DrinkQuantitySelectorprops) => {
  return (
    <div className="relative z-10 flex flex-col gap-2">
      <div className="flex gap-2 w-full justify-center relative z-10">
        <button
          className="incrementIcon"
          disabled={props.drinkQuantity < 2}
          onClick={() => {
            props.setDrinkQuantity((prev) => prev - 1);
          }}
        >
          –
        </button>
        <p className="text-bitsRed-500 text-4xl">{props.drinkQuantity} </p>
        <button
          className="incrementIcon"
          disabled={props.drinkQuantity >= 50}
          onClick={() => {
            props.setDrinkQuantity((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DrinkQuantitySelector;
