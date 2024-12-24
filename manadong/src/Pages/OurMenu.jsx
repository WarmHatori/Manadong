import React, { useState } from "react";
import Menu from "../Components/Menu";
import ButtonOrderNow from "../Components/ButtonOrderNow";
import Title from "../Components/Title";

function OurMenu() {
  const AyamRica = require("../Aset/AyamRica.png");
  const CumiHitam = require("../Aset/CumiHitam.png");
  const CakalangTinorasak = require("../Aset/CakalangTinorasak.png");
  const PerkedelJagung = require("../Aset/PerkedelJagung.png");
  const AyamWoku = require("../Aset/AyamWoku.png");
  const LaukFrozen = require("../Aset/LaukFrozen.png");
  const CakalangRabe = require("../Aset/CakalangRabe.png");

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    setSelectedMenu(null);
  };

  return (
    <div class="max-w-screen-xl mx-auto py-16 px-10">
      <div class="pl-2">
        <Title title="Our Menu" />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 py-6 gap-2">
        <Menu
          image={AyamRica}
          title="Ayam Rica"
          onClick={() =>
            handleMenuClick({
              image: AyamRica,
              title: "Ayam Rica",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={CumiHitam}
          title="Cumi Hitam"
          onClick={() =>
            handleMenuClick({
              image: CumiHitam,
              title: "Cumi Hitam",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={CakalangTinorasak}
          title="Cakalang Tinorasak"
          onClick={() =>
            handleMenuClick({
              image: CakalangTinorasak,
              title: "Cakalang Tinorasak",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={PerkedelJagung}
          title="Perkedel Jagung"
          onClick={() =>
            handleMenuClick({
              image: PerkedelJagung,
              title: "Perkedel Jagung",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={AyamWoku}
          title="Ayam Woku"
          onClick={() =>
            handleMenuClick({
              image: AyamWoku,
              title: "Ayam Woku",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={LaukFrozen}
          title="Lauk Frozen"
          onClick={() =>
            handleMenuClick({
              image: LaukFrozen,
              title: "Lauk Frozen",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
        <Menu
          image={CakalangRabe}
          title="Cakalang Rabe"
          onClick={() =>
            handleMenuClick({
              image: CakalangRabe,
              title: "Cakalang Rabe",
              description:
                "Steamed rice, 2 pieces of corn fritters, and squid with black sauce.",
              price: "Rp. 40.000",
            })
          }
        />
      </div>
      <div class="text-center">
        <ButtonOrderNow />
      </div>

      {isPopupVisible && selectedMenu && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="flex flex-col bg-white w-full max-w-md max-h-screen overflow-y-auto relative rounded-xl">
            <div className="w-10 h-10 bg-white rounded-full absolute top-0 right-0 m-4">
              <button
                onClick={handlePopupClose}
                className="text-2xl font-normal text-gray-800 hover:text-red-500 absolute items-center justify-center w-full h-full"
              >
                X
              </button>
            </div>
            <div>
              <img
                src={selectedMenu.image}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 p-8 w-full">
              <div>
                <p className="text-2xl font-bold text-[#004685]">
                  {selectedMenu.title}
                </p>
              </div>
              <div>
                <p className="text-lg">{selectedMenu.description}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-red-500">
                  {selectedMenu.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurMenu;
