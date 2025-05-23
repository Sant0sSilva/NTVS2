const DrinksPage = () => {
  return (
    <div className="flex gap-2 justify-center md:h-screen md:w-screen">
      {/* Search and drinks menu box */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <p className="boxParagraph">Search</p>

          <input type="text" className="emailInput" />
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="drinkBox">drinks menu</div>
          <div className="drinkBox">drinks menu</div>
          <div className="drinkBox">drinks menu</div>
          <div className="drinkBox">drinks menu</div>
        </div>
      </div>
      {/* Cart box */}
      <div className="flex flex-col ">
        <p className="boxParagraph">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[12px]"></div>
        <div className="drinkBox">Cart box</div>
      </div>
    </div>
  );
};

export default DrinksPage;
