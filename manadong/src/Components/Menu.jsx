import React, { useState } from "react";

function Menu(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-2 py-6 transform transition-all duration-300 ${
        isHovered ? "scale-110" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src={props.image}
        onClick={props.onClick}
      />
      <p className="text-xl font-semibold">{props.title}</p>
    </div>
  );
}

export default Menu;
