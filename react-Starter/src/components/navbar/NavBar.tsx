"use client";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <div className="text-black flex flex-col md:flex-row w-3/5 justify-self-center justify-center mt-5 mb-10 gap-2">
        <div>
          <img
            src="/images/lilbits.png"
            alt="Lil bit's!"
            className="min-w-50 h-21"
          />
        </div>

        <ol className="flex gap-2 items-end justify-between w-3/5 px-2 text-xl text-bitsRed-500">
          <li
            className={`${
              pathname === "/"
                ? "bg-bitsRed-500/35 px-2 py-1 rounded-md rounded-r-4xl scale-110"
                : ""
            }`}
          >
            Home
          </li>
          <li
            className={`${
              pathname === "/drinks"
                ? "bg-bitsRed-500/35 px-2 py-1 rounded-md rounded-r-4xl scale-110"
                : ""
            }`}
          >
            Drinks
          </li>
          <li
            className={`${
              pathname === "/food"
                ? "bg-bitsRed-500/35 px-2 py-1 rounded-md rounded-r-4xl scale-110"
                : ""
            }`}
          >
            Food
          </li>
          <li
            className={`${
              pathname === "/booking"
                ? "bg-bitsRed-500/35 px-2 py-1 rounded-md rounded-r-4xl scale-110"
                : ""
            }`}
          >
            Booking
          </li>
          <li
            className={`${
              pathname === "/receipt"
                ? "bg-bitsRed-500/35 px-2 py-1 rounded-md rounded-r-4xl scale-110"
                : ""
            }`}
          >
            Receipt
          </li>
        </ol>
      </div>
    </div>
  );
};
export default NavBar;
