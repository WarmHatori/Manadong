import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
// import Eatery from "../Eatery";
// import News from "..News";
import ComingSoon from "../../Pages/ComingSoon";
import AboutUs from "../../Pages/AboutUs";
import App from "../../App";
import OrderNow from "../../Pages/OrderNow";
import Outlets from "../../Pages/Outlets";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/eatery" element={<Eatery />} />
        <Route path="/news" element={<News />} /> */}
        <Route path="/eatery" element={<ComingSoon />} />
        <Route path="/news" element={<ComingSoon />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/purchase" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default Routing;
