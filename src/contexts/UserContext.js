import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserController = (props) => {
    const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password:"",
    profile_pic_url:"",
    biography: ""
    });

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const token = await localStorage.usertoken;
        const decoded = await jwt_decode(token);
        console.log(decoded);
        setUser({
            id: decoded.user._id,
            name: decoded.user.name,
            email: decoded.user.email,
            password: decoded.user.password,
            biography:decoded.user.biography,
            
        })
    }

    return (
        <UserContext.Provider value={[user, setUser]}>
        {props.children}
        </UserContext.Provider>
    );
};
