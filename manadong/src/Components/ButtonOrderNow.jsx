import React from "react";
import { Link } from "react-router-dom";

function ButtonOrderNow() {
  return (
    <Link to="/order-now">
      <button
        type="button"
        className="text-[#00548C] hover:text-white border border-[#00548C] hover:bg-[#004685] font-bold rounded-lg text-md px-3 py-2.5 text-center me-2 mb-2 dark:border-[#004685] dark:text-[#004685] dark:hover:text-white dark:hover:bg-[#004685]"
      >
        Order Now
      </button>
    </Link>
  );
}

export default ButtonOrderNow;
