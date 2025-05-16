"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="p-20">
      <h1>Welcome to the Homepage</h1>
      <Link className="border border-red-500" href={"/blog"}>
        Go to blog
      </Link>
    </div>
  );
};

export default Home;
