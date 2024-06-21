// imports
import axios from "axios";
import React, { useEffect, useState } from "react"

interface AuthProps {
  user: object;
  setUser: React.Dispatch<React.SetStateAction<object>>;
}

interface Users {
  userName: string;
  password: string;
  userType: string;
}

export default function Signup() {

  // Users interface is needed here so methods and functions can deconstruct each User in the array
  const [users, setUsers] = useState<Users[]>([])

  const [nameIsUnique, setNameIsUnique] = useState<boolean>(false)

  const blacklist: string[] = ["racialslur"] 

  useEffect(()=>{
    getUsers()
  },[])

  useEffect(()=>{
    if (!!users.length){
      console.log("users updated")
    }
    
    if (users.length > 0) {
      console.log("users populated")
      console.log(users)
      // findName()
    }
  },[users])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let userNameInput = e.target.value
    // console.log(users)
    // console.log(!!users.find((user)=> user.userName === userNameInput))

    if(!!users.find((user) => user.userName === userNameInput) || userNameInput.length < 5){
      setNameIsUnique(false)
    } else {
      if(blacklist.includes(userNameInput)){
        setNameIsUnique(false)
      } else {
        setNameIsUnique(true)
      }
    }
  }

  const getUsers = async () => {
    try {
      let res = await axios.get("http://localhost:4000/auth/users");
      setUsers(res.data.users)
    }
    catch (err) {
      console.log("no connection to db")
    }
  }

  const handleSignup = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    let name =  document.getElementById("name")! as HTMLInputElement;
    let pass = document.getElementById("pass")! as HTMLInputElement;
    let passConfirm = document.getElementById("pass-confirm") as HTMLInputElement;
    console.log(pass.value, passConfirm.value)
    if (pass.value === passConfirm.value) {
      // make a note, buddy - objects passed to axios requests need to be wrapped in another object as the value of a "data" key
      let newUser = {data: {"userName": name.value, "password": pass.value, "userType": "admin"}}
      let res = await axios.post("http://localhost:4000/auth/signup", newUser)
      console.log(res)
    } else {
      console.log("failed to sign up")

    }
  }

  return (
    <div className="text-center">
      <div className="bungee">Sign Up</div>
      <div>
      <form action="/" method="post" className="login-form flex flex-col items-start">
        <div className="username-form flex flex-row pb-4">
          <label htmlFor="name" className="pr-4">Username</label>
          <input className="pl-1" type="text" name="name" id="name" onChange={(e) => handleNameChange(e)} required />
          <div className={`w-4 h-4 relative ${!nameIsUnique ? 'bg-red-400' : 'bg-green-600'}`}></div>
        </div>
        <div className="password-form pb-4">
          <label htmlFor="password" className="pr-5">Password</label>
          <input className="pl-1" type="password" name="password" id="pass" required />
        </div>
        <div className="password-confirm-form pb-4">
          <label htmlFor="password" className="pr-5">Confirm Password</label>
          <input className="pl-1" type="password" name="password-confirm" id="pass-confirm" required />
        </div>
        <div className="submit-button w-full flex justify-center">
          <input type="submit" value="Log In" onClick={(e) => handleSignup(e)}/>
        </div>
      </form>
      </div>
    </div>
  )
}
