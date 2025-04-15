type Expense = {
  name: string;
  cost: number;
  id: number;
};

type ItemCardProps = {
  expense: Expense;
};

const ItemCard = ({ expense }: ItemCardProps) => {
  // const getExpenseByID = (id: number) => {
  //   return (
  //     expenses.find((e) => e.id === id) ?? { name: "Not Found", cost: 0, id: 0 }
  //   );
  // };
  // const expense = getExpenseByID(1);

  return (
    <div className="flex border-2 border-teal-300 w-84 ">
      <div className="w-3/5 my-4 mx-4">
        <p>
          <strong>Name: </strong> {expense.name}
        </p>
        <p>
          <strong>Cost: </strong> {expense.cost}
        </p>
      </div>
      <div className="flex flex-col w-2/5 items-end">
        <p className="m-1">X</p>
      </div>
    </div>
  );
};
export default ItemCard;
