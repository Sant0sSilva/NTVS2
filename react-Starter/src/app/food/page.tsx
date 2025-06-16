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
import { useRouter } from "next/navigation";

const FoodPage = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [generateNew, setGenerateNew] = useState<boolean>(false);
  const router = useRouter();

  const newMeal = useOrderStore((state) => state.setMeal);
  const mealOrder = useOrderStore((state) => state.order.meal);

  const handleContinue = () => {
    if (!mealOrder || mealOrder.idMeal === 0) {
      return;
    } else {
      router.push("/booking");
    }
  };

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
    <div className=" flex md:flex-row flex-col gap-2 justify-center flex-wrap ">
      {/* Search and drinks menu box */}
      <div className="flex flex-col gap-2 items-center md:items-stretch">
        <p className="boxParagraph">Menu</p>
        <FoodImage meal={meal[0]} />
        <p className="boxParagraph">{`${meal[0].strMeal}`}</p>
        <IngredientBox meal={meal[0]} />
        <div className="flex gap-50 md:justify-between">
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
      <div className="flex flex-col items-center">
        <p className="boxParagraph w-full text-center">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[7px] r"></div>
        <CartBox />
        <div className="flex gap-2 justify-between mt-2">
          <Link href={"/drinks"}>
            <button className="btn">Back</button>
          </Link>
          <button className="btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodPage;
