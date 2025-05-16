import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-green-800 w-screen">
      <div className="w-2/3 text-3xl font-bold p-2">
        <Link href={"/"}>Shreks World</Link>
      </div>
      <div className="flex items-center">
        <ol className="flex gap-4 text-xl  items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/characters"}>Characters</Link>
          <Link href={"/location"}>Location</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/search"}>Search</Link>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
