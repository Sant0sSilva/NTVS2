const NavBar = () => {
  return (
    <div>
      <div className="text-black flex w-3/5 justify-self-center justify-center mt-5 mb-10">
        <div>
          <img
            src="/images/lilbits.png"
            alt="Lil bit's!"
            className="w-80 h-31"
          />
        </div>

        <ol className="flex items-end justify-between w-3/5 px-2 text-xl text-bitsRed-500">
          <li>Home</li>
          <li>Drinks</li>
          <li>Food</li>
          <li>Booking</li>
          <li>Receipt</li>
        </ol>
      </div>
    </div>
  );
};
export default NavBar;
