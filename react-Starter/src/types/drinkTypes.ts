export type APIDrink = {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
};

export type Drink = APIDrink & {
  quantity: number;
  price: number;
};
