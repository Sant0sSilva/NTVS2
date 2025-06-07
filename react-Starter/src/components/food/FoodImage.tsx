import type { Meal } from "@/types/mealTypes";

type FoodImageProps = {
  meal: Meal;
};

const FoodImage = ({ meal }: FoodImageProps) => {
  if (!meal) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="foodBox">
      <img
        src={`${meal.strMealThumb}`}
        alt={`${meal.strMeal}`}
        className="object-fill rounded w-[30rem] h-[22rem]"
      />
    </div>
  );
};
export default FoodImage;
