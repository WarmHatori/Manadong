import React from "react";

function Promotion(props) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <img class="rounded-t-lg" src={props.image} alt="Promotion" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#00548C]">
          {props.title}
        </h5>
        <p class="text-lg font-normal text-gray-700 dark:text-gray-800">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Promotion;
