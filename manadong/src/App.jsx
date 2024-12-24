import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Pages/Intro";
import OurMenu from "./Pages/OurMenu";
import PromotionReviews from "./Pages/PromotionReviews";
import Locations from "./Pages/Locations";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
        <Intro />
        <OurMenu />
        <PromotionReviews />
        <Locations />
      </div>
      <Footer />
    </div>
  );
}

export default App;


