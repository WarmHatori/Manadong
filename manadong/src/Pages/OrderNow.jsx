import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ButtonOrderNowBlue from "../Components/ButtonOrderNowBlue";
import Title from "../Components/Title";
import { Link } from "react-router-dom";

function OrderNow() {
  const GrabFood = require("../Aset/GrabFood.png");
  const GoFood = require("../Aset/GoFood.png");
  const ShopeeFood = require("../Aset/ShopeeFood.png");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-16 flex-1">
        <div className="block max-w bg-white border border-gray-500 rounded-lg px-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-red-500 hover:text-red-700">
              Back
            </Link>
            <div className="h-8 border-l-2 border-gray-400"></div>
            <Link to="/">
              <span className="text-[#004685] hover:text-[#004685]">Home</span>
            </Link>
            <span className="text-gray-500">/</span>
            <Link to="/order-now">
              <span className="text-[#004685] hover:text-[#004685]">
                Order Now
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center py-8">
          <Title title="Order Now On :" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 w-full">
          <div className="flex flex-col items-center">
            <div>
              <img src={GrabFood} className="w-40 h-40" alt="Grab Food Logo" />
            </div>
            <div>
              <Link to="/outlets">
                <ButtonOrderNowBlue />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={GoFood} className="w-40 h-40" alt="Go Food Logo" />
            </div>
            <div>
              <ButtonOrderNowBlue />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img
                src={ShopeeFood}
                className="w-40 h-40"
                alt="Shopee Food Logo"
              />
            </div>
            <div>
              <ButtonOrderNowBlue />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderNow;
