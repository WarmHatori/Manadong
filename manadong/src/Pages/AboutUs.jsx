import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AboutUs() {
  const ImageAboutUs = require("../Aset/image14.png");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-16 flex-1 px-10">
        <div className="pl-2 pb-6">
          <p className="text-4xl font-bold text-[#00548C]">About Us</p>
          <hr className="w-16 h-1 bg-gray-100 border-0 rounded md:my-1 dark:bg-[#E03A2D]" />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={ImageAboutUs}
              className="w-full h-auto object-cover"
              alt="Image About Us"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <p className="text-3xl font-semibold text-gray-900">
                About Our Company
              </p>
            </div>
            <div>
              <p className="w-full text-md text-gray-500 dark:text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                euismod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
