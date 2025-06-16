import { Meal } from "@/types/mealTypes";
import { Drink } from "@/types/drinkTypes";

export type Order = {
  id: number;
  email: string;
  meal: Meal;
  drinks: Drink[];
  guests: number;
  date: Date;
  time: string;
};

export type OrderResponse =
  | {
      success: true;
      order: Order;
    }
  | {
      success: false;
      error: string;
    };
