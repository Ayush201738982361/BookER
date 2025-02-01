import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../public/styles/signup.css";

function Signup(props) {
  useEffect(() => {
    if (props.mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [props.mode]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    axios
      .post("http://localhost:8000/user/signup", { name, email, password })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Signup Successful");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("Signup Failed. Please Try Again.");
        }
      })
      .catch((error) => {
        toast.error("User With This Email Already Exists");
        console.log(error);
      });
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={3000} />
      <form method="POST" onSubmit={handleSubmit}>
        <i>
          <h1>Signup</h1>
        </i>
        <input
          style={{
            color: props.mode === "dark" ? "white" : "black",
            borderColor: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
          }}
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{
            color: props.mode === "dark" ? "white" : "black",
            borderColor: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#212529" : "white",
          }}
          placeholder="Email"
          type="email"
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
  );
}

Signup.propTypes = {
  mode: PropTypes.string.isRequired,
};
export default Signup;
