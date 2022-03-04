import React from 'react';
//import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
//import {UserContext} from "../contexts/UserContext";

const Logout = () => {
    //const[state, dispatch] = useContext(UserContext);
    let navigate = useNavigate();

    const handleClick = ()=>{
        //localStorage.removeItem("token")
        // dispatch({type:"USER", paylaod: false})
        sessionStorage.removeItem('token')
        // window.location.reload();
        localStorage.clear()
        //navigate("/")
        console.log("bye bye")

    }
    
    return (
        <>
        <div>
            <button onClick={handleClick}></button>
        </div>
        </>
    )
}

export default Logout