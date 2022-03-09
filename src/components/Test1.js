import React from 'react';
import axios from "axios";
import { useState, useContext, useEffect } from "react";

const Test1 = () => {
    const [data, setData] = useState([])
    
    const [loading, setLoading] = useState(false)
    const fetchSketches = async () => {
        setLoading(true);
        await axios
        .get(`http://localhost:4000/api/users/all`)
        .then(res =>
        setData(res.data)
            // res.data.map(user => {
            //   console.log(user.username)
            //   user.sketch_ids.map(sketch => {
            //     console.log(sketch.sketch_url)
            //   })
            // })
            
            )
            setLoading(false)
    }



  return (
      <>
       <div>test1</div>
        <div>
            {data && data.map(user =>{
                {console.log(user)}
            <h1 style={{color:"red"}}>{user.username}</h1>
            })
            
            }
        </div>
      
      
      </>
   
  )
}

export default Test1