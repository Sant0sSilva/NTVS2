"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isBlog = pathname.includes("/blog");

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
