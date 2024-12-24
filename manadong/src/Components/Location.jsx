import React from "react";

function Location(props) {
  return (
    <div className="flex items-center justify-start bg-white border border-gray-200 rounded-lg shadow-lg p-6 gap-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F8D3D2]">
        <img
          src={props.image}
          alt="Location"
          className="w-6 h-6 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-[#00548C]">
          {props.title}
        </h5>
        <p className="text-sm font-bold text-gray-700 dark:text-gray-400 line-clamp-2">
          {props.address}
        </p>
        <a
          href={props.link}
          className="inline-flex font-medium items-center text-red-500 hover:underline underline"
        >
          View Map
        </a>
      </div>
    </div>
  );
}

export default Location;
