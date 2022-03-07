import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserController = (props) => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password:"",
    profile_pic_url:"",
    biography: "",
    sketch_ids:[]
    });
    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwt_decode(token);
        console.log(decoded);
        setUser({
            id: decoded.user._id,
            username: decoded.user.username,
            email: decoded.user.email,
            password: decoded.user.password,
            biography:decoded.user.biography,
            sketch_ids:decoded.user.sketch_ids
        })
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
