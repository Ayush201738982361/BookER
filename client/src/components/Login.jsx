import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";
import "../public/styles/login.css";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  useEffect(() => {
    if (props.mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [props.mode]);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Login Successful");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        toast.error("Invalid email or password");
        console.error(err);
      });
  };

  return (
    <>
      <div className="container">
        <ToastContainer position="top-right" autoClose={4000} />
        <form action="/user/login" method="POST" onSubmit={handleSubmit}>
          <i>
            <h1>Login</h1>
          </i>
          <input
            style={{
              color: props.mode === "dark" ? "white" : "black",
              borderColor: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
            }}
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={{
              color: props.mode === "dark" ? "white" : "black",
              borderColor: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
            }}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

Login.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Login;
