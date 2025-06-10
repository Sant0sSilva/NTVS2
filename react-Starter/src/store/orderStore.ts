import { create } from "zustand";
import type { Order } from "@/types/ordersAPITypes";
import type { Drink } from "@/types/drinkTypes";
import type { Meal } from "@/types/mealTypes";
import { api } from "@/api/api";
import { isNodeError } from "@/utilities/errorUtilities";

type OrderStore = {
  order: Order;
  setSelectedDate: (date: Date | undefined) => void;
  setSelectedTime: (time: string) => void;
  guestDecrement: () => void;
  guestIncrement: () => void;
  setMeal: (meal: Meal) => void;
  addDrink: (drink: Drink, quantity: number) => void;
  removeDrink: (idDrink: number) => void;
  setEmail: (email: string) => void;
  getOrder: (email: string) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  order: {
    id: 0,
    email: "",
    meal: { idMeal: 0, strMeal: "", strMealThumb: "" },
    drinks: [
      { idDrink: 0, strDrink: "", strDrinkThumb: "", quantity: 0, price: 9.99 },
    ],
    guests: 1,
    date: new Date(),
    time: "16:00",
  },
  setSelectedDate: (date) => {
    if (date === undefined) {
      //TODO add return state? throw error?
      return;
    }
    set((state) => ({
      order: {
        ...state.order,
        date: date,
      },
    }));
  },
  setSelectedTime: (time) => {
    set((state) => ({
      order: {
        ...state.order,
        time: time,
      },
    }));
  },

  guestDecrement: () => {
    set((state) => ({
      order: {
        ...state.order,
        guests: state.order.guests - 1,
      },
    }));
  },
  guestIncrement: () => {
    set((state) => ({
      order: {
        ...state.order,
        guests: state.order.guests + 1,
      },
    }));
  },
  setMeal: (meal) => {
    set((state) => ({
      order: {
        ...state.order,
        meal: meal[0],
      },
    }));
  },
  addDrink: (drink, quantity) => {
    set((state) => {
      const existingDrink = state.order.drinks.find(
        (d) => d.idDrink === drink.idDrink
      );

      const updatedDrinks = existingDrink
        ? state.order.drinks.map((d) =>
            d.idDrink === drink.idDrink
              ? { ...d, quantity: d.quantity + quantity }
              : d
          )
        : [...state.order.drinks, { ...drink, quantity }];

      return {
        order: {
          ...state.order,
          drinks: updatedDrinks,
        },
      };
    });
  },
  removeDrink: (idDrink) => {
    set((state) => {
      const updatedDrinks = state.order.drinks.filter(
        (d) => d.idDrink !== idDrink
      );

      return {
        order: {
          ...state.order,
          drinks: updatedDrinks,
        },
      };
    });
  },
  setEmail: (email) => {
    set((state) => ({
      order: {
        ...state.order,
        email,
      },
    }));
  },
  getOrder: async (email) => {
    const encodedEmail = encodeURIComponent(email);
    const orderDataResponse = await api.getOrderAPI(encodedEmail);
    if (isNodeError(orderDataResponse)) {
      return;
    }
    set((state) => ({
      order: orderDataResponse,
    }));
  },
}));
