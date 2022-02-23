import {useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password:""
  })
  const navigate = useNavigate();
  const [error, setError] = useState("")

  const handleChange = ({currentTarget: input}) => {
    setUser({...user, [input.name]:input.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const url = "http://localhost:5000/api/auth/register"
      await axios
      .post(url, user)
      console.log('saved')
      navigate("/login")


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
      <h1>Register</h1>
      <input 
        type= "text"
        placeholder="Username"
        name= "username"
        value= {user.username} 
        required 
        onChange= {handleChange}
      >
      </input>
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
      <button
        type="submit">
          Register
      </button>
      </form>
      

    </div>
  );
};

export default Register;
