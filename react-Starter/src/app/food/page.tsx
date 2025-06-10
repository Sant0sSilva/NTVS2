"use client";

import { useEffect, useState } from "react";
import CartBox from "../../components/cart/cartBox";
import type { Meal } from "@/types/mealTypes";
import { isNodeError } from "@/utilities/errorUtilities";
import Link from "next/link";
import IngredientBox from "@/components/food/IngredientsBox";
import { api } from "@/api/api";
import FoodImage from "@/components/food/FoodImage";
import { useOrderStore } from "@/store/orderStore";

const FoodPage = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [generateNew, setGenerateNew] = useState<boolean>(false);

  const newMeal = useOrderStore((state) => state.setMeal);

  const onNewMeal = () => {
    if (meal != null) {
      newMeal(meal);
    }
  };

  useEffect(() => {
    const getMealData = async () => {
      const mealDataResponse = await api.getMeal();
      if (isNodeError(mealDataResponse)) {
        return;
      }
      setMeal(mealDataResponse["meals"]);
    };
    getMealData();
  }, [generateNew]);

  if (!meal) {
    return (
      <div className="flex justify-center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    // Remember to fix responsiveness here
    <div className=" flex md:flex-row flex-col gap-2 justify-center flex-wrap">
      {/* Search and drinks menu box */}
      <div className="flex flex-col gap-2">
        <p className="boxParagraph">Menu</p>
        <FoodImage meal={meal[0]} />
        <p className="boxParagraph">{`${meal[0].strMeal}`}</p>
        <IngredientBox meal={meal[0]} />
        <div className="flex justify-between">
          <button
            className="btn px-2 flex items-center justify-center"
            onClick={() => {
              setGenerateNew((prev) => !prev);
            }}
          >
            Generate New
          </button>
          <button
            onClick={() => {
              onNewMeal();
            }}
            className="btn px-2 flex items-center justify-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Cart box */}
      <div className="flex flex-col">
        <p className="boxParagraph w-full">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[7px]"></div>
        <CartBox />
        <div className="flex gap-2 justify-between mt-2">
          <Link href={"/drinks"}>
            <button className="btn">Back</button>
          </Link>
          <Link href={"/booking"}>
            <button className="btn">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FoodPage;
