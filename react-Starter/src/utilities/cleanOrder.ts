import type { Order } from "@/types/ordersAPITypes";

export const getCleanOrder = (): Order => ({
  id: 0,
  email: "",
  meal: { idMeal: 0, strMeal: "", strMealThumb: "" },
  drinks: [],
  guests: 1,
  date: new Date(),
  time: "16:00",
});
