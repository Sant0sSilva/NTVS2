import type { Meal } from "@/types/mealTypes";

type IngredientsBoxProps = {
  meal: Meal;
};

const IngredientBox = ({ meal }: IngredientsBoxProps) => {
  const getIngredients = (meal: Meal) => {
    const ingredients = [];

    for (let i = 0; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient.trim());
      }
    }
    return ingredients;
  };
  const ingredientArr = getIngredients(meal) || "Ingredients not found";

  return (
    <div className="border border-bitsRed-500 rounded max-h-min  w-[30rem] h-[10rem] flex flex-col gap-1 flex-wrap p-1 text-sm">
      {ingredientArr.map((ingredient, index) => {
        return (
          <p className="boxParagraph " key={index}>
            {`${index + 1}: ${ingredient}`}
          </p>
        );
      })}
    </div>
  );
};
export default IngredientBox;
