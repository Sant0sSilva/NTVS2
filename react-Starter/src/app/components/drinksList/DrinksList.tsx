"use client";

import { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import type { Drink } from "@/app/types/drinkTypes";

const isNodeError = (data: unknown): data is NodeJS.ErrnoException => {
  if (data && typeof data === "object" && "message" in data && "name" in data) {
    return true;
  }
  return false;
};

const DrinksList = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const drinksByFirstLetterURL =
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
        const response = await fetch(drinksByFirstLetterURL);
        if (response.status != 200) {
          throw new Error(`Response: ${response.status}`);
        }
        const json = await response.json();
        return json;
      } catch (error) {
        return error;
      }
    };
    const getDrinksData = async () => {
      const drinksDataResponse = await getDrinks();
      if (isNodeError(drinksDataResponse)) {
        return;
      }
      setDrinks(drinksDataResponse["drinks"]);
    };
    getDrinksData();
    console.log("Here:", drinks);
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
    <div className="grid grid-cols-2 gap-2 ">
      {drinks.map((drink) => {
        return <DrinkItem key={drink.idDrink} Drink={drink} />;
      })}
    </div>
  );
};

export default DrinksList;
