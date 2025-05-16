"use client";

const Home = () => {
  return (
    <div className="flex justify-center align-middle items-center h-screen ">
      <div className="bg-green-200 w-1/3 h-2/5 text-black rounded-md">
        <div className="flex h-1/2 items-end justify-center text-3xl">
          <h1 className="">Welcome to Shrek's World!</h1>
        </div>
        <div className="flex h-1/2 items-start justify-center py-4">
          <p>Feel free to walk around the swamp</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
