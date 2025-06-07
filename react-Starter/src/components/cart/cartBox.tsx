const CartBox = () => {
  return (
    <div className="cartBox flex flex-col items-center boxParagraph">
      <div className="flex justify-evenly w-full">
        <div className=" flex flex-col">
          {/* //TODO Change to each item having its own row dynamically mapped  */}

          <p className="">Qty</p>
          <p>1</p>
          <p>2</p>
          <p>4</p>
          <p>3</p>
          <p>3</p>
        </div>
        <p className="boxParagraph">Item</p>
        <p className="boxParagraph">Price</p>
      </div>
    </div>
  );
};

export default CartBox;
