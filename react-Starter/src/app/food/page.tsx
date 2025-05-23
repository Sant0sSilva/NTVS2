const FoodPage = () => {
  return (
    <div className="flex gap-2 justify-center ">
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
        <p className="boxParagraph">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[7px]"></div>
        <div className="drinkBox">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};
export default FoodPage;
