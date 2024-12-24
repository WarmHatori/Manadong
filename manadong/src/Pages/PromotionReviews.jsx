import React from "react";
import Promotion from "../Components/Promotion";
import Carousel from "../Components/Carousel";
import Title from "../Components/Title";

function PromotionReviews() {
  const Buy2Get1 = require("../Aset/Buy2Get1.png");

  return (
    <div className="w-full">
      <div className="w-full bg-[#F8D3D2] py-16 px-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-16">
          <div className="md:w-auto">
            <Title title="Promotion" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <Promotion
              image={Buy2Get1}
              title="Buy 2 Get 1"
              description="Buy 2 and get 1 free, applicable to select variants."
            />
            <Promotion
              image={Buy2Get1}
              title="Discount 20%"
              description="Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50.000"
            />
            <Promotion
              image={Buy2Get1}
              title="Bundle Deal"
              description="Purchase Ayam Woku and Ayam Rica can save 30% on the total cost."
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#C6D7E5] py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <Title title="Reviews" />
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default PromotionReviews;
