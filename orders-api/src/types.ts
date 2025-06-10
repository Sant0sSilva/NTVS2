export type Meal = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

export type Drink = {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: number;
  email: string;
  meal: Meal;
  drinks: Drink[];
  guests: number;
  date: Date;
  time: string;
};
