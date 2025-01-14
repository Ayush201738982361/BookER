import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../public/styles/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    axios
      .post("http://localhost:3000/user/signup", { name, email, password })
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        } else {
          console.log("Error:", response.data);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="container">
      <form method="post" onSubmit={handleSubmit}>
        <i>
          <h1>Signup</h1>
        </i>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
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
  );
}

export default Signup;
