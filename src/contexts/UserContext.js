import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

export const UserController = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    profile_pic_url: "",
    biography: "",
    sketch_ids: [],
  });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      //console.log(decoded);
      axios
        .get(`https://pixasso.herokuapp.com/api/users/${decoded.user._id}`)
        .then((res) => {
          //console.log(res)
          setUser({
            id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            password: res.data.password,
            biography: res.data.biography,
            sketch_ids: res.data.sketch_ids,
          });
        });
    } else {
      navigate("/register");
    }
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
