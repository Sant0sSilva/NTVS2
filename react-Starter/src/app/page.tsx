"use client";

const Home = () => {
  return (
    <div className="flex flex-col md:h-screen md:w-screen items-center">
      {/* BODY CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-2 px-10">
        {/* CAROUSAL BOX */}
        <div className="box md:col-span-7">
          <img
            src="/images/lil-bits-outside.webp"
            alt=""
            className="object-cover h-50 w-full rounded-xs"
          />
        </div>
        {/* START YOUR ORDER BOX */}
        <div className="box flex flex-col justify-center items-center md:gap-8  md:col-span-3  ">
          <p className="boxHeader">Start your order!</p>
          <button className="btn ">Order</button>
        </div>
        {/* FIND YOUR ORDER BOX */}
        <div className="box md:col-span-6 flex flex-col">
          <div className="flex">
            <p className="boxHeader m-2">Find your order</p>
          </div>
          <div className="md:flex h-full items-end gap-6">
            <div className=" w-4/5 m-2">
              <label htmlFor="emailInput" className="boxParagraph">
                Enter Email
              </label>
              <br />
              <input
                id="emailInput"
                type="text"
                placeholder="email@email.com"
                className="emailInput"
              />
            </div>
            <button className="btn m-2">Find</button>
          </div>
        </div>
        {/* OPENING HOURS BOX */}
        <div className="box md:col-span-4 flex flex-col justify-center items-center ">
          <p className="boxHeader">Opening Hours</p>
          <p className="boxParagraph mt-5">Sun – Thurs: 12:00 – 23:00</p>
          <p className="boxParagraph">Fri – Sat: 12:00 – 01:00</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
