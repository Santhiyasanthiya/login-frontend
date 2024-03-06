import React, { useState } from "react";
import '../App.css';
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Login from "./Login";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const dispatch = useDispatch();
  const registerHandle = () => {
    console.log(name, email, password);
    dispatch(signupUser({ name, email, password }));
    alert("Registration Completed. Now Login!");
    navigate("/login")
  };
 
 
  return (
    
      <div className="body">
        <div className="main">

       

          <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" name="txt"
              placeholder="Enter Your Name"
              required=""
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"name="email"
              placeholder="Enter Your Email"
              required=""
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" name="pswd"
              placeholder="Enter Your Password"
              required=""
            />
            <button onClick={registerHandle}>Sign up</button>
            </form>
            </div>       
        </div>   
      </div>
 
  );
};

export default Register;
