/*
import type { Expense, ExpenseResponse } from "@/app/types/ExpenseType";

type RequestMethod = "POST" | "GET" | "DELETE";

const getResponse = async <T>(
  url: string,
  method: RequestMethod,
  body: Record<string, unknown> | undefined = undefined
) => {
  const response = await fetch(`http://localhost:3001${url}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (response.status != 200) {
    throw new Error(`Response Status: ${response.status}`);
  }
  const json: T = await response.json();
  return json;
};

const getExpenses = async () => {
  try {
    const response = await getResponse<Expense[]>("/api/expenses", "GET");
    return response;
  } catch (error: any) {
    const nodeError: NodeJS.ErrnoException = error;
    return nodeError;
  }
};

const api = {
  getExpenses,
};

export default api;
*/
/////////////////////////////////////////////////////////////////////////////

/*
import type { Expense, ExpenseResponse } from "@/app/types/ExpenseType";

type RequestMethod = "POST" | "GET" | "DELETE";

const getExpenses = async () => {
  try {
    const url = "http://localhost:3001/api/expenses";
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(`Response: ${response.status}`);
    }

    const json: ExpenseResponse = await response.json();
    return json.response;
  } catch (error: any) {
    const nodeError: NodeJS.ErrnoException = error;
    return nodeError;
  }
};

const api = {
  getExpenses,
};

export default api;

*/
