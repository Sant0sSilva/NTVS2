import React from "react";

const ReceiptHeader = () => {
  return (
    <div className="flex flex-col">
      <ol className="flex boxParagraph justify-around">
        <div className="itemBox">
          <li className="cartBoxFont">Quantity</li>
        </div>
        <div className="itemBox">
          <li className="cartBoxFont">Item</li>
        </div>
        <div className="itemBox">
          <li className="cartBoxFont">Price</li>
        </div>
      </ol>
    </div>
  );
};

export default ReceiptHeader;
