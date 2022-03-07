import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../images/logoP-medium-color.png";
import jwt_decode from "jwt-decode";
//import {UserContext} from "../contexts/UserContext";


const Login = () => {
  //const [user, setUser] = useContext(UserContext)
  useEffect(()=>{
    console.log(user)
  },[])


  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth/login";
      const { data } = await axios.post(url, user);
      localStorage.setItem("token", data);
      navigate('/profile')
      console.log("logged in");
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
        <h1>Login:</h1>
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
        <button type="submit">Submit</button>
        <h1>{error}</h1>
        <h1>New here?</h1>
        <Link to="/Register">Please Register!</Link>
      </form>
    </div>
  );
};

export default Login;
