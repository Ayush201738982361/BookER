import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      return;
    }
    setMode("dark");
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/signup" element={<Signup mode={mode} />} />
          <Route path="/login" element={<Login mode={mode} />} />
          <Route path="/aboutus" element={<AboutUs mode={mode} />} />
          <Route path="/sell" element={<Sell mode={mode} />} />
          <Route path="/buy" element={<Buy mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  );
};

export default App;
