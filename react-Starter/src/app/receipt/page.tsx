const ReceiptPage = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="box flex flex-col w-2/6">
        <h1 className="boxHeader m-5">Receipt</h1>
        <div className="flex flex-col">
          <div className="flex gap-20 boxParagraph justify-center">
            <p>Quantity</p>
            <p>Item</p>
            <p>Price</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-2/6">
        <button className="btn">Back to Home</button>
        <button className="btn ">Pay</button>
      </div>
    </div>
  );
};

export default ReceiptPage;
