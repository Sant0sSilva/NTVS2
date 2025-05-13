"use client";

import { useEffect, useState } from "react";

interface DrinkDetails {
  strDrink: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
}

interface DrinksInfo {
  drinks: DrinkDetails[];
}
interface Drinks {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

const isNodeError = (data: unknown): data is NodeJS.ErrnoException => {
  if (data && typeof data === "object" && "message" in data && "name" in data) {
    return true;
  }
  return false;
};

const delay = (ms: number) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

const Home = () => {
  const [drinks, setDrinks] = useState<Drinks[]>([]);
  const [drinksInfo, setDrinksInfo] = useState<DrinksInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDrinkID, setSelectedDrinkID] = useState<string | null>(null);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        setIsLoading(true);
        const drinksURL =
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

        const response = await fetch(drinksURL);
        if (response.status != 200) {
          throw new Error(`Houston we have a... ${response.status}`);
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
      setIsLoading(false);
    };

    getDrinksData();
  }, []);

  const getDrinkInfoData = async (drinkID: string): Promise<DrinksInfo> => {
    try {
      const drinkInfoURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
      const drinksInfoDataResponse = await fetch(drinkInfoURL);
      if (drinksInfoDataResponse.status != 200) {
        throw new Error(`Error: ${drinksInfoDataResponse.status}`);
      }
      const json: DrinksInfo = await drinksInfoDataResponse.json();
      return json;
    } catch (error: any) {
      return error;
    }
  };

  const getDrinkInfo = async (drinkID: string) => {
    const drinksInfoResponse: DrinksInfo = await getDrinkInfoData(drinkID);

    if (isNodeError(drinksInfoResponse)) {
      return;
    }
    console.log(drinksInfoResponse.drinks);
    setDrinksInfo(drinksInfoResponse);
  };

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <div className="p-10 font-bold text-4xl italic">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-2">
            {drinks.map((drink) => (
              <div
                key={drink.idDrink}
                onClick={() =>
                  setSelectedDrinkID((prevID) =>
                    prevID === drink.idDrink ? null : drink.idDrink
                  )
                }
                className={`flex flex-col rounded-2xl border-2 border-lime-400 p-2 items-center bg-zinc-800 hover:cursor-pointer transition-transform duration-300 ${
                  selectedDrinkID && drink.idDrink !== selectedDrinkID
                    ? "opacity-0 pointer-events-none"
                    : ""
                }`}
              >
                <h1 className="text-lime-400 font-bold">{drink.strDrink}</h1>
                <img
                  className="rounded-2xl opacity-90 border border-lime-400"
                  src={drink.strDrinkThumb}
                  alt={`drink ${drink.strDrink}`}
                  width={300}
                  height={200}
                />
                {drink.idDrink == selectedDrinkID ? (
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus, natus?
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

// drink information url, drink id needed (idDrink)
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=ID_HÉR
