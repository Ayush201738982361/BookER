import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../public/styles/login.css";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
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
          } else {
            toast.error("Login Failed");
            console.log("Incorrect email or password");
          }
        });
    } catch (err) {
      toast.error("Login Failed");
      console.error(err);
    }
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
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
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

export default Login;
