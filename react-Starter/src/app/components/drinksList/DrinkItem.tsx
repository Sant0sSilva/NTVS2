import type { Drink } from "@/app/types/drinkTypes";

type DrinkItemProps = {
  Drink: Drink;
};

const DrinkItem = ({ Drink }: DrinkItemProps) => {
  return (
    <div>
      <div className="drinkBox flex flex-col boxParagraph items-center justify-end">
        <img
          src={`${Drink.strDrinkThumb}/small`}
          alt={Drink.strDrink}
          className="rounded-t-md"
        />
      </div>
      <div className="drinkInfoBox boxParagraph ">
        <p>{Drink.strDrink}</p>
        <p>$9.90</p>
      </div>
    </div>
  );
};

export default DrinkItem;
