import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Buy from "./components/Buy";
import Sell from "./components/Sell";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
