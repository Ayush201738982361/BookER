import { Link } from "react-router-dom";
import "../public/styles/style.css";
import logo from "../public/images/booker-logo.jpg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> 
          <div className="left">
            <img src={logo} alt="error" />
          </div>
        </Link>
        <div className="right">
          <div className="about_us">
            <a href="#">About Us</a>
          </div>
          <div className="my-account">
            <a href="#">My Account</a>
          </div>
          <Link to="/signup">
            <button type="button" className="btn btn-outline-dark">
              SIGNUP
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="btn btn-outline-dark">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
