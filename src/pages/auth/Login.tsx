// imports
import axios from "axios";
import React from "react"
import { NavLink } from "react-router-dom";

interface AuthProps {
  user: object;
  setUser: React.Dispatch<React.SetStateAction<object>>;
}

export default function Login({user, setUser}:AuthProps) {

  

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    let user =  document.getElementById("name");
    let pass = document.getElementById("pass");

    console.log("gotcha")
  }

  const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    let name =  document.getElementById("name")! as HTMLInputElement;
    let pass = document.getElementById("pass")! as HTMLInputElement;
    console.log(name.value, pass.value)
    // make a note, buddy - objects passed to axios requests need to be wrapped in another object as the value to a "data" key
    let credentials = {data: {"userName": name.value, "password": pass.value}}
    try {
      let res = await axios.post("http://localhost:4000/auth/login", credentials)
      console.log(res.data)
      
    }
    catch (err) {
      console.log("shidd")
    }
  }

  return (
    <div className="text-center">
      <div className="bungee">Log In</div>
      <div>
      <form action="/" method="post" className="login-form flex flex-col items-start">
        <div className="username-form flex flex-row pb-4">
          <label htmlFor="name" className="pr-4">Username</label>
          <input className="pl-1" type="text" name="name" id="name" required />
          <div className={`w-4 h-4 relative`}></div>
        </div>
        <div className="password-form pb-4">
          <label htmlFor="password" className="pr-5">Password</label>
          <input className="pl-1" type="password" name="password" id="pass" required />
        </div>
        <div className="submit-button w-full flex justify-center">
          <input type="submit" value="Log In" onClick={(e) => handleLogin(e)}/>
        </div>
      </form>
      </div>
      <NavLink to={"/signup"}>Not registered? Sign up here</NavLink>
    </div>
  )
}
