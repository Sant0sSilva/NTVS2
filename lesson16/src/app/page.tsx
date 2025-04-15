"use client";

import { useState } from "react";

const nameArray = ["Alice", "Bob", "Charlie"];
// const listItems = nameArray.map((name, index) => <li key={index}>{name}</li>);

const DATA = [
  {
    id: 1,
    name: "Bluetooth Headphones",
    price: 59.99,
    quantityRemaining: 35,
    isVisible: true,
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 19.95,
    quantityRemaining: 82,
    isVisible: true,
  },
  {
    id: 3,
    name: "Gaming Mouse Pad",
    price: 12.49,
    quantityRemaining: 50,
    isVisible: true,
  },
  {
    id: 4,
    name: "USB-C Charging Cable",
    price: 8.99,
    quantityRemaining: 150,
    isVisible: true,
  },
  {
    id: 5,
    name: "Smart LED Light Bulb",
    price: 14.99,
    quantityRemaining: 64,
    isVisible: true,
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 34.95,
    quantityRemaining: 27,
    isVisible: true,
  },
  {
    id: 7,
    name: "Wireless Keyboard",
    price: 29.99,
    quantityRemaining: 40,
    isVisible: true,
  },
  {
    id: 8,
    name: "Noise Cancelling Earplugs",
    price: 15.0,
    quantityRemaining: 75,
    isVisible: true,
  },
  {
    id: 9,
    name: "Portable Power Bank",
    price: 39.95,
    quantityRemaining: 18,
    isVisible: true,
  },
  {
    id: 10,
    name: "Mini Desk Fan",
    price: 22.5,
    quantityRemaining: 33,
    isVisible: true,
  },
];

type Items = typeof DATA;
type Item = Items[number];

const ItemCard = ({ name, price, quantityRemaining }: Item) => {
  return (
    <div className="border border-white rounded p-2 gap-[5px]">
      <p>Product: {name}</p>
      <p>Price: {price}</p>
      <p>Available: {quantityRemaining}</p>
    </div>
  );
};

const Home = () => {
  const [products, setProducts] = useState(DATA);
  const [isShown, setIsShown] = useState(false);

  const removeFirstName = () => {
    setProducts((prev) => prev.slice(1));
  };
  const showList = () => {
    setIsShown(true);
  };

  return (
    <div className="flex flex-col p-20 w-2/3 items-center ">
      <div>
        <button
          type="button"
          onClick={removeFirstName}
          className="border-2 bg-amber-500 rounded-md px-4 py-2 hover:bg-amber-300 hover:text-black cursor-pointer transition duration-400 "
        >
          Remove Item
        </button>
        <button
          type="button"
          onClick={showList}
          className="border-2 bg-amber-500 rounded-md px-4 py-2 hover:bg-amber-300 hover:text-black cursor-pointer transition duration-400  m-2"
        >
          Show List
        </button>
      </div>
      <div>
        <ul
          className={`m-4 transition-all duration-500 transform${
            isShown
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 absolute"
          }`}
        >
          {products.map((product) => (
            <ItemCard {...product} key={product.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
