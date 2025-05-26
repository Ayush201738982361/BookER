import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../public/styles/style.css";
import logo from "../public/images/booker-logo.jpg";
import darkLogo from "../public/images/booker-dark-logo.jpg";

function Navbar(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/me", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (err) {
      console.log("Error Logging Out User :", err);
    }
  };

  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white" }}
      >
        <Link to="/">
          <div className="left">
            {props.mode === "dark" ? (
              <img src={darkLogo} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
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

          {user ? (
            <>
              <span
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  marginRight: "10px",
                }}
              >
                Hello, {user.email}
              </span>
              <button
                type="button"
                className={
                  props.mode === "dark"
                    ? "btn btn-outline-light"
                    : "btn btn-outline-dark"
                }
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button
                  type="button"
                  className={
                    props.mode === "dark"
                      ? "btn btn-outline-light"
                      : "btn btn-outline-dark"
                  }
                >
                  SIGNUP
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className={
                    props.mode === "dark"
                      ? "btn btn-outline-light"
                      : "btn btn-outline-dark"
                  }
                >
                  LOGIN
                </button>
              </Link>
            </>
          )}
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
