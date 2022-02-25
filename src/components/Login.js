import {useState} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password:""
  })
  
  const [error, setError] = useState("")

  const handleChange = ({currentTarget: input}) => {
    setUser({...user, [input.name]:input.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const url = "http://localhost:5000/api/auth/login"
      const {data: res} = await axios
      .post(url, user)
      localStorage.setItem("token", res.data)
      window.location ="/"
      console.log('logged in')



    } catch(error){
      if (error.response && error.resposne.status === 400){
        setError(error.response.messege)
      }
    }
  }
console.log(user)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Pixasso</h1>
        <input 
          type= "email"
          placeholder="Email"
          name= "email"
          value= {user.email} 
          required 
          onChange= {handleChange}
        >
        </input>
        <input 
          type= "password"
          placeholder="Password"
          name= "password"
          value= {user.password} 
          required 
          onChange= {handleChange}
        >
        </input>
        <button type="submit">
					Submit
				</button>
        <h1>{error}</h1>
        <h1>New here?</h1>
        <Link to="/Register">
          New here? Please Register..
        </Link>
        
      </form>
      

    </div>
  );
};

export default Login;
