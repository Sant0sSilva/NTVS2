"use client";
import { Calendar } from "@/components/ui/calendar";
import { TimeDropdown } from "@/components/Timedropdown/Dropdown";
import GuestSelector from "@/components/guestSelector/GuestSelector";
import { useOrderStore } from "@/store/orderStore";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/api/api";
import { Order } from "@/types/ordersAPITypes";

const BookingPage = () => {
  //Local state
  const [invalidEmailMessage, setInvalidEmailMessage] =
    useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const router = useRouter();

  //Global states
  const setSelectedDate = useOrderStore((state) => state.setSelectedDate);
  const selectedDate = useOrderStore((state) => state.order.date);
  const setEmail = useOrderStore((state) => state.setEmail);
  const currentOrder = useOrderStore.getState().order;

  const onEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };
  /////////////////
  const validateEmail = (email: string): boolean => {
    const regEXP = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    const isEmpty = email.trim() === "";
    const isValid = regEXP.test(email);

    if (isEmpty || !isValid) {
      setInvalidEmailMessage(true);
      return false;
    }

    setEmail(email);
    setInvalidEmailMessage(false);
    return true;
  };
  /////////////////
  const handleSubmit = async () => {
    const isValid = validateEmail(emailInput);
    if (!isValid) return;

    const updatedOrder: Order = {
      ...currentOrder,
      email: emailInput,
    };

    const response = await api.postOrderAPI(updatedOrder);

    if (response.success) {
      console.log("Order submitted successfully:", response.order);
      router.push("/receipt");
    } else {
      console.error("Order submission failed:", response.error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <div className="box md:min-w-max md:flex md:flex-row flex flex-col p-2 gap-2">
          {/* Pick a date box */}
          <div className="flex flex-col">
            <p className="boxParagraph">Pick a date and time</p>
            <div className="flex flex-col items-center">
              <Calendar
                disabled={[{ before: new Date() }, { dayOfWeek: [0, 6] }]}
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-xs border border-bitsGreen-500 text-bitsYellow-500"
              />

              <TimeDropdown buttonText="Select Time" />
            </div>
            <p></p>
          </div>
          {/* Guest box */}
          <div className="flex flex-col items-center justify-end gap-2 md:gap-30">
            <GuestSelector />

            {/* Email submission box */}
            <div className="flex gap-2 items-end">
              <div>
                <label htmlFor="emailInput" className="boxParagraph">
                  Enter Email
                  {invalidEmailMessage && (
                    <span className=" text-red-500 mx-2">Email is invaid</span>
                  )}
                </label>
                <br />
                <input
                  id="emailInput"
                  type="text"
                  placeholder="email@email.com"
                  className="emailInput"
                  onChange={onEmailInput}
                />
              </div>
              <button onClick={() => handleSubmit()} className="btn h-1/2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
