export type Expense = {
  id: number;
  name: string;
  cost: number;
};

export type ExpenseResponse = {
  success: true;
  response: Expense[];
};
export type SingleExpenseResponse = {
  success: true;
  response: Expense;
};

export type New_Expense_Item = {
  name: string;
  cost: number;
};
