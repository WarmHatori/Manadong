import React from "react";

function Review(props) {
  const RightQuote = require("../Aset/RightQuote.png");
  const LeftQuote = require("../Aset/LeftQuote.png");

  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
      <div class="p-2">
        <div>
          <img class="h-auto w-4" src={RightQuote} alt="Right Quote" />
        </div>
        <div class="p-3">
          <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-[#00548C]">
            {props.title}
          </h5>
          <p class="text-sm font-bold text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
        <div class="flex justify-end">
          <img class="h-auto w-4" src={LeftQuote} alt="Left Quote" />
        </div>
      </div>
    </div>
  );
}

export default Review;
