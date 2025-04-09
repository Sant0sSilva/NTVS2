"use strict";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import QuoteGenerator from "./Components/QuoteGenerator";
import TypeInputter from "./Components/TypeInputter";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-green-200 h-screen w-screen">
      <Header />
      <QuoteGenerator />
      <TypeInputter />
      <Footer />
    </div>
  );
};

export default Home;
