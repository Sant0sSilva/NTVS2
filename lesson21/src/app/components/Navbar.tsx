"use client";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isBlog = pathname.includes("/blog");
  const theme = useContext(ThemeContext);
  console.log("Here", theme);

  return (
    <nav className="flex px-20 bg-green-700 ">
      <ol className="flex justify-between gap-4 mx-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="/blog" style={isBlog ? { backgroundColor: "red" } : {}}>
            Blog
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
