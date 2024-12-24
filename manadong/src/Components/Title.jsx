import React from "react";

function Title(props) {
  return (
    <div>
      <div className="relative">
        <p className="text-4xl font-bold text-[#00548C]">{props.title}</p>
        <hr className="absolute top-full mt-2 left-0 w-16 h-1 bg-red-500 border-0 rounded"></hr>
      </div>
    </div>
  );
}

export default Title;
