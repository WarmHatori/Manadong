import React from "react";
import ButtonOrderNow from "../Components/ButtonOrderNow";

function Intro() {
  const ImageIntro = require("../Aset/image14.png");

  return (
    <div className="max-w-screen flex flex-col sm:flex-row items-center justify-between mx-auto bg-[#F8D3D2]">
      <div class="mx-auto space-y-6 p-4 ">
        <div>
          <div>
            <p class="text-4xl font-bold text-red-500">Manadong</p>
          </div>
          <div>
            <p class="text-xl font-normal">is a Manado dish with a spicy</p>
          </div>
          <div>
            <p class="text-xl font-normal">and appetizing flavour.</p>
          </div>
        </div>

        <div>
          <p class="text-xl font-semibold text-red-500">
            #NikmatnyaGaPakeRibet
          </p>
        </div>

        <div>
          <ButtonOrderNow />
        </div>
      </div>

      <div className="sm:w-1/2 sm:order-last">
        <img
          className="w-full h-auto object-cover"
          src={ImageIntro}
          alt="Image Intro"
        />
      </div>
    </div>
  );
}

export default Intro;
