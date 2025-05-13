import type {
  Expense,
  ExpenseResponse,
  New_Expense_Item,
  SingleExpenseResponse,
} from "@/app/types/ExpenseType";

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
    throw new Error(`Response Status: ${response.status}`);
  }
  const json: T = await response.json();
  return json;
};

const getExpenses = async () => {
  try {
    const response = await getResponse<ExpenseResponse>("/api/expenses", "GET");
    return response.response;
  } catch (error: any) {
    const nodeError: NodeJS.ErrnoException = error;
    return nodeError;
  }
};

const deleteExpenseById = async (id: number) => {
  try {
    const response = await getResponse<Expense[]>(
      `/api/expense/${id}`,
      "DELETE"
    );
    return response;
  } catch (error: any) {
    const nodeError: NodeJS.ErrnoException = error;
    return nodeError;
  }
};

const createExpense = async (
  newExpense: New_Expense_Item
): Promise<Expense> => {
  const response = await getResponse<SingleExpenseResponse>(
    "/api/create-expense",
    "POST",
    newExpense
  );
  return response.response;
};

const api = {
  getExpenses,
  deleteExpenseById,
  createExpense,
};

export default api;
