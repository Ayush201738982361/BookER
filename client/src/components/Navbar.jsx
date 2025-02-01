import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../public/styles/style.css";
import logo from "../public/images/booker-logo.jpg";

function Navbar(props) {
  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white" }}
      >
        <Link to="/">
          <div className="left">
            <img src={logo} alt="error" />
          </div>
        </Link>
        <div className="right">
          <Link to="/aboutus">
            <div className="about_us">
              <span
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                About Us
              </span>
            </div>
          </Link>
          <label className="switch">
            <input type="checkbox" onClick={props.toggleMode} />
            <span className="slider">
              <svg
                className="slider-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
              >
                <path fill="none" d="m4 16.5 8 8 16-16"></path>
              </svg>
            </span>
          </label>

          <Link to="/signup">
            {props.mode === "dark" ? (
              <button type="button" className="btn btn-outline-light">
                SIGNUP
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark">
                SIGNUP
              </button>
            )}
          </Link>
          <Link to="/login">
            {props.mode === "dark" ? (
              <button type="button" className="btn btn-outline-light">
                LOGIN
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark">
                LOGIN
              </button>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
