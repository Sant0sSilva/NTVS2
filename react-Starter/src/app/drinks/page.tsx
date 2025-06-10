import CartBox from "../../components/cart/cartBox";
import DrinksList from "../../components/drinksList/DrinksList";
import Link from "next/link";

const DrinksPage = () => {
  return (
    <div className="flex justify-center md:h-screen md:w-screen gap-2">
      {/* Search and drinks menu box */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <p className="boxParagraph">Search</p>

          <input type="text" className="searchInput" />
        </div>
        {/* drinks list */}

        <DrinksList />
      </div>
      {/* Cart box */}
      <div className="flex flex-col ">
        <p className="boxParagraph">Cart</p>
        {/* this div below is to line up the cart with the drinks containers */}
        <div className="h-[12px]"></div>
        <CartBox />
        <div className="flex gap-2 justify-between mt-2">
          <Link href={"/"}>
            <button className="btn">Back</button>
          </Link>
          <Link href={"/food"}>
            <button className="btn">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrinksPage;
