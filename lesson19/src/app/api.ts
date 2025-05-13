type RequestMethod = "GET" | "POST";

const getResponse = async <T>(
  url: string,
  method: RequestMethod,
  body: Record<string, unknown> = {}
) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
  });
  if (response.status != 200) {
    throw new Error(`Response Status: ${response.status}`);
  }
  const json: T = await response.json();

  return json;
};

const getExpenses = async () => {
  try {
    const url = "http://localHost:3001/api/expenses";
    const response = await fetch(url, {
      method: "POST",
      body: {},
    });
    if (response.status != 200) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const json: Expense[] = await response.json();
    return json;
  } catch (error) {}
};

const someEndPoint = async () => {
  const response = await getResponse("/api/expenses", "POST");
};
