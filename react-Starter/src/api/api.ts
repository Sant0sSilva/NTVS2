const getMeal = async () => {
  try {
    const mealURL = "https://themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(mealURL);
    if (response.status != 200) {
      throw new Error(`Response: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

const getDrinks = async () => {
  try {
    const drinksByFirstLetterURL =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    const response = await fetch(drinksByFirstLetterURL);
    if (response.status != 200) {
      throw new Error(`Response: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const api = {
  getMeal,
  getDrinks,
};
