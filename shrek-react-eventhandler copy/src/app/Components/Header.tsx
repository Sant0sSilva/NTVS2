const Header = () => {
  return (
    <div>
      <header className=" flex flex-col items-center p-6 rounded-t-2xl text-green-900">
        <img src="\shrek.jpg" alt="Shrek image" className="p-4 rounded-full" />
        <h1 className="font-bold text-4xl">Welcome to Shrek's Swamp!</h1>
      </header>
    </div>
  );
};
export default Header;
