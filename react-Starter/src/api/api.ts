import { OrderResponse, Order } from "@/types/ordersAPITypes";

type RequestMethod = "POST" | "GET" | "DELETE";

const getResponse = async <T>(
  url: string,
  method: RequestMethod,
  body: Record<string, unknown> | undefined = undefined
) => {
  const response = await fetch(`http://localhost:3001${url}`, {
    method,
    headers: { "content-type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status != 200) {
    throw new Error(`response Status:, ${response.status}`);
  }

  const json: T = await response.json();
  return json;
};

const getOrderAPI = async (encodedEmail: string) => {
  try {
    const response = await getResponse<Order>(
      `/api/order/${encodedEmail}`,
      "GET"
    );
    return response;
  } catch (error: any) {
    const nodeError: NodeJS.ErrnoException = error;
    return nodeError;
  }
};

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
  getOrderAPI,
};
