"use client";

import { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import type { APIDrink } from "@/types/drinkTypes";
import { isNodeError } from "@/utilities/errorUtilities";
import { api } from "@/api/api";

const DrinksList = () => {
  const [drinks, setDrinks] = useState<APIDrink[]>([]);

  useEffect(() => {
    const getDrinksData = async () => {
      const drinksDataResponse = await api.getDrinks();
      if (isNodeError(drinksDataResponse)) {
        return;
      }
      setDrinks(drinksDataResponse["drinks"]);
    };
    getDrinksData();
  }, []);

  if (drinks.length < 1) {
    return (
      <div>
        <p className="text-8xl text-bitsYellow-500 font-extrabold">
          Loading...
        </p>
        <p className="text-5xl text-bitsYellow-500 font-extrabold">
          Loading...
        </p>
        <p className="text-2xl text-bitsYellow-500 font-extrabold">
          Loading...
        </p>
        <p className="text-xl text-bitsYellow-500 font-extrabold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 ">
      {drinks.map((drink, index) => {
        return <DrinkItem key={drink.idDrink} drink={drink} index={index} />;
      })}
    </div>
  );
};

export default DrinksList;
