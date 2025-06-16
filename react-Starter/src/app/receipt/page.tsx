"use client";

import Link from "next/link";
import ReceiptHeader from "@/components/reciept/ReceiptHeader";
import ReceiptList from "@/components/reciept/ReceiptList";

const ReceiptPage = () => {
  return (
    <div className="pageContainer gap-2 py-4">
      <div className="box flex flex-col w-2/6">
        <h1 className="boxHeader m-5">Receipt</h1>
        <div className="flex flex-col items-center p-4">
          <ReceiptHeader />
          <ReceiptList />
        </div>
      </div>

      <div className="flex justify-between w-2/6">
        <Link href={"/"}>
          <button className="btn">Back to Home</button>
        </Link>
        <button className="btn ">Pay</button>
      </div>
    </div>
  );
};

export default ReceiptPage;
