const BookingPage = () => {
  return (
    <div className="pageContainer">
      <div className="box w-[500px] flex ">
        {/* Pick a date box */}
        <div className="flex flex-col w-2/5 gap-2 p-2">
          <p className="boxParagraph">Pick a date</p>
          <div className="box">Calander</div>
        </div>
        {/* Guest box */}
        <div className="flex flex-col p-2">
          <div className="h-4/5">
            <p className="boxParagraph">Guests</p>
            {/* change below div to input */}
            <p className="boxHeader">1</p>
          </div>
          {/* Email submission box */}
          <div className="flex gap-2 items-end">
            <div>
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
            <button className="btn h-1/2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
