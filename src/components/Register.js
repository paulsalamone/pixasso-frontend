import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logoP-medium-color.png";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://pixasso.herokuapp.com/api/auth/register";
      await axios.post(url, user);
      console.log("saved");
      navigate("/login");
    } catch (error) {
      if (error.response && error.resposne.status === 400) {
        setError(error.response.messege);
      }
    }
  };
  console.log(user);
  return (
    <div className="form-page">
      <img src={Logo} alt="pixasso medium logo" />
      <form onSubmit={handleSubmit}>
        <Link to="/editor">
          <button className="button-home-big">make some art!</button>
        </Link>

        <h1>Register for Pixasso</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          required
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          required
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          required
          onChange={handleChange}
        ></input>
        <button type="submit" style={{ marginBottom: "25px" }}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
