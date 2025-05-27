import CartBox from "../components/cart/cartBox";

const FoodPage = () => {
  return (
    // Remember to fix responsiveness here
    <div className=" flex md:flex-row flex-col gap-2 justify-center flex-wrap">
      {/* Search and drinks menu box */}
      <div className="flex flex-col gap-2">
        <p className="boxParagraph">Menu</p>
        <div className="foodBox">food pic</div>
        <p className="boxParagraph">Title</p>
        <div className="foodBox">ingredients</div>
        <div className="flex justify-end">
          <button className="btn px-2 flex items-center justify-center">
            Generate New
          </button>
        </div>
      </div>
      {/* Cart box */}
      <div className="flex flex-col">
        <p className="boxParagraph w-full">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[7px]"></div>
        <CartBox />
      </div>
    </div>
  );
};
export default FoodPage;
