import React from "react";

function Footer() {
  const LogoManadong = require("../Aset/image22.png");
  const LogoWhatsapp = require("../Aset/Whatsapp.png");
  const LogoFacebook = require("../Aset/Facebook.png");
  const LogoInstagram = require("../Aset/Instagram.png");

  return (
    <footer className="bg-white dark:bg-[#004685] mt-auto">
      <div className="flex w-full py-12 justify-center">
        <div className="flex w-full max-w-screen-xl justify-between gap-8 flex-col md:flex-row mx-auto items-center">
          <div className="flex flex-col items-start gap-3 mb-8 md:mb-0">
            <img
              src={LogoManadong}
              className="h-20 block mx-auto md:mx-0"
              alt="Logo Manadong"
            />
            <span className="text-sm text-gray-500 dark:text-gray-300 text-center">
              Copyright © 2023 PT Bogadong Anugerah Indonesia
            </span>
          </div>

          <div className="w-64 flex flex-col gap-4 mb-8 md:mb-0">
            <div>
              <p className="text-lg font-bold text-gray-500 dark:text-gray-300 flex items-center justify-center md:justify-start">
                Contact Us
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <p className="w-24 text-lg font-semibold text-gray-500 dark:text-gray-300">
                Email
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">:</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 underline">
                Manadong@gmail.com
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <p className="w-24 text-lg font-semibold text-gray-500 dark:text-gray-300">
                Telp
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">:</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 underline">
                +62-811-1009-115
              </p>
            </div>
            <div className="flex justify-center gap-4 md:justify-end">
              <a href="https://wa.me/628111009115" target="_blank">
                <img src={LogoWhatsapp} className="h-5" />
              </a>
              <a href="https://www.facebook.com/manadong.id.9/" target="_blank">
                <img src={LogoFacebook} className="h-5" />
              </a>
              <a href="https://www.instagram.com/manadong.id/" target="_blank">
                <img src={LogoInstagram} className="h-5" />
              </a>
            </div>
          </div>

          <div className="w-36 flex flex-col gap-6 items-center justify-center md:flex-none md:items-start md:justify-start">
            <div>
              <p className="text-lg font-bold text-gray-500 dark:text-gray-300">
                Available On
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center md:flex-none md:items-start md:justify-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300 underline">
                  Grab Food
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300 underline">
                  GoFood
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300 underline">
                  Shopee Food
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
