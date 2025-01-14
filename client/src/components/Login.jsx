import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../public/styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("Error during login", err);
      });
  };
  return (
    <>
      <div className="container">
        <form action="/user/login" method="post" onSubmit={handleSubmit}>
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
