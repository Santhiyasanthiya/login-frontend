import React, { useState } from "react";
import '../App.css';
import { signInUser, logout} from "../redux/authSlice";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()

const dispatch = useDispatch()


const handleLogin=()=>{
  console.log(email,password)
  dispatch(signInUser({email,password}))
  navigate("/navbar")
 
}  


const logouthandle =()=>{
dispatch(logout)
}
  return (  
      <div className="login">       
<form>
<label htmlFor="chk" aria-hidden="true">Login</label>
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
  placeholder="Enter Your Email"
  required=""
/>
<input
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  type="password"
  name="pswd"
  placeholder="Enter Your Password"
  required=""
/>
<button onClick={handleLogin}>Login </button>    
</form>
      </div>
  
  );
};

export default Login;
