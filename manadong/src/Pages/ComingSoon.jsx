import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ComingSoon() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-[#004685]">Coming Soon</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ComingSoon;
