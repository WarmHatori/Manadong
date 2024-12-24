import React from "react";
import { Link } from "react-router-dom";

function Outlet(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-base md:text-lg font-semibold text-gray-700">
          {props.title}
        </p>
        <Link to="/purchase">
          <p className="text-sm md:text-base font-semibold text-red-500">
            Purchase Here
          </p>
        </Link>
      </div>
      <hr className="h-1 bg-gray-200 border-0 rounded"></hr>
    </div>
  );
}

export default Outlet;
