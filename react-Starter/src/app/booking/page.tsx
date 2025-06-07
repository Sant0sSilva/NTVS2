"use client";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { TimeDropdown } from "@/components/Timedropdown/Dropdown";
import { generateTimes } from "@/utilities/timeUtilities";
import DropdownItem from "@/components/Timedropdown/dropdownItem/DropdownItem";
import GuestSelector from "@/components/guestSelector/GuestSelector";

const BookingPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="pageContainer">
      <div className="box md:min-w-max md:flex md:flex-row flex flex-col p-2 gap-2">
        {/* Pick a date box */}
        <div className="flex flex-col">
          <p className="boxParagraph">Pick a date and time</p>
          <div className="flex flex-col items-center">
            <Calendar
              disabled={[{ before: new Date() }, { dayOfWeek: [0, 6] }]}
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xs border border-bitsRed-500/50"
            />

            <TimeDropdown
              buttonText="Select Time"
              content={generateTimes(15).map((time, index) => {
                return <DropdownItem key={index} time={time} />;
              })}
            />
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
              </label>
              <br />
              <input
                id="emailInput"
                type="text"
                placeholder="email@email.com"
                className="emailInput"
              />
            </div>
            <Link href={"/receipt"}>
              <button className="btn h-1/2">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
