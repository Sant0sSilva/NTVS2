"use client";

import Link from "next/link";
import { useOrderStore } from "@/store/orderStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useValidateEmail } from "../hooks/useEmaiValidation";
import { api } from "@/api/api";
import { isNodeError } from "@/utilities/errorUtilities";
import type { Order } from "@/types/ordersAPITypes";
import { getCleanOrder } from "@/utilities/cleanOrder";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const { isInValid, validate } = useValidateEmail();
  const setOrder = useOrderStore((state) => state.setOrder);

  const getOrder = async (email: string) => {
    const encodedEmail = encodeURIComponent(email);
    const response = await api.getOrderAPI(encodedEmail);

    if (isNodeError(response)) {
      return;
    }
    return response;
  };

  const handleEmailSubmit = async () => {
    const isValid = validate(email);

    if (!isValid) {
      return;
    } else {
      const fetchedOrder = await getOrder(email);
      if (fetchedOrder) {
        setOrder(fetchedOrder);
        router.push("/drinks");
      } else {
        return;
      }
    }
  };

  return (
    <div className="flex flex-col md:h-screen md:w-screen items-center">
      {/* BODY CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-2 px-10">
        {/* CAROUSAL BOX */}
        <div className="box md:col-span-7">
          <img
            src="/images/lil-bits-outside.webp"
            alt=""
            className="object-fill h-50 w-full rounded-xs"
          />
        </div>
        {/* START YOUR ORDER BOX */}
        <div className="box flex flex-col justify-center items-center md:gap-8  md:col-span-3  ">
          <p className="boxHeader">Start your order!</p>
          <Link
            href={"/drinks"}
            onClick={() => {
              setOrder(getCleanOrder());
            }}
          >
            <button className="btn">Order</button>
          </Link>
        </div>
        {/* FIND YOUR ORDER BOX */}
        <div className="box md:col-span-6 flex flex-col">
          <div className="flex">
            <p className="boxHeader m-2">Find your order</p>
          </div>
          <div className="md:flex h-full items-end gap-6">
            <div className=" w-4/5 m-2">
              <label htmlFor="emailInput" className="boxParagraph">
                Enter Email
              </label>{" "}
              {isInValid && (
                <span className=" text-red-500 mx-2">Email is invaid</span>
              )}
              <br />
              <input
                id="emailInput"
                type="text"
                placeholder="email@email.com"
                className="emailInput"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button onClick={handleEmailSubmit} className="btn m-2">
              Find
            </button>
          </div>
        </div>
        {/* OPENING HOURS BOX */}
        <div className="box md:col-span-4 flex flex-col justify-center items-center ">
          <p className="boxHeader">Opening Hours</p>
          <p className="boxParagraph mt-5">Sun – Thurs: 12:00 – 23:00</p>
          <p className="boxParagraph">Fri – Sat: 12:00 – 01:00</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
