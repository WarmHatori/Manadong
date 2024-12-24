import React from "react";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Outlet from "../Components/Outlet";

function Outlets() {
  const OutletImage = require("../Aset/image14.png");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-16 flex-1">
        <div className="block max-w bg-white border border-gray-500 rounded-lg px-4">
          <div className="flex items-center space-x-4">
            <Link to="/order-now" className="text-red-500 hover:text-red-700">
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
            <span className="text-gray-500">/</span>
            <Link to="/outlets">
              <span className="text-gray-700 hover:text-[#004685]">
                GrabFood Outlet
              </span>
            </Link>
          </div>
        </div>

        <div className="py-8 px-10">
          <Title title="GrabFood Outlet" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-8 px-10">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex flex-col gap-2">
              <Outlet title="Senopati, Petogogan" />
              <Outlet title="Kebun Jeruk / Tanjung Duren" />
              <Outlet title="Food Plaza PIK" />
              <Outlet title="Kuningan - D'Kanteen" />
              <Outlet title="Bintaro, Thelapan Square" />
              <Outlet title="Gading Serpong" />
              <Outlet title="Cipete" />
              <Outlet title="Menteng" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center">
            <img
              src={OutletImage}
              className="w-full h-auto object-cover"
              alt="Image About Us"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Outlets;
