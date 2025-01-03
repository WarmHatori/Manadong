import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const LogoManadong = require("../Aset/image22.png");

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-[#004685] dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoManadong} className="h-16" alt="Logo Manadong" />
        </div>
        <button
          onClick={handleMenuToggle}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-hamburger"
        >
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D7AAAF] dark:text-white md:dark:hover:text-[#D7AAAF] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/eatery"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D7AAAF] dark:text-white md:dark:hover:text-[#D7AAAF] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Eatery
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D7AAAF] dark:text-white md:dark:hover:text-[#D7AAAF] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#D7AAAF] dark:text-white md:dark:hover:text-[#D7AAAF] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
