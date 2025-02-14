import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Buy from "./components/Buy";
import Sell from "./components/Sell";

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
