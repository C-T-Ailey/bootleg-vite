// imports
import axios from "axios";
import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";

interface AuthProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

// Let's get this straight.
// On login, you want to authenticate the user and authorize them to access login-specific features.
// Reaching the other side of the 

export default function Login({user, setUser}:AuthProps) {

  const navigate = useNavigate()

  useEffect(()=>{
    console.log(user, user.toString() !== "none")
    if (user !== "none"){
      navigate("/")
      console.log("redirect")
    }
  },[])

  const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {

    e.preventDefault();

    let name =  document.getElementById("name")! as HTMLInputElement;
    let pass = document.getElementById("pass")! as HTMLInputElement;

    console.log(name.value, pass.value)

    // make a note, buddy - objects passed to axios requests need to be wrapped in another object as the value to a "data" key
    let credentials = {data: {"userName": name.value, "password": pass.value}}
    try {
      let res = await axios.post("http://localhost:4000/auth/login", credentials)
      console.log(res)
      localStorage.setItem("token", res.data.token)
      // let userProp = {}
      setUser(credentials.data.userName);
      navigate("/")
    }
    catch (err) {
      console.log("failed to log in")
    }
  }

  // const handleDecrypt = async (e: React.MouseEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   const data = {data: token}
  //   try {
  //     let res = await axios.post("http://localhost:4000/auth/token", data)
  //     console.log("data sent:", res.data.token)
  //   }
  //   catch (err) {
  //     console.log("whoops")
  //   }
  // }

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
        <div className="submit-button w-full flex flex-col items-center">
          <input type="submit" value="Log In" onClick={(e) => handleLogin(e)}/>
          {/* <input type="submit" value="Decrypt" onClick={(e)=> handleDecrypt(e)}/> */}
        </div>
      </form>
      </div>
      <NavLink to={"/signup"}>Not registered? Sign up here</NavLink>
    </div>
  )
}
