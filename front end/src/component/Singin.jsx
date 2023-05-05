import React, { useState } from 'react'
import axios from 'axios';
import './Singin.css'
import { useNavigate } from 'react-router-dom';
function Singin() {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
      });
      const handelUser = (event) => {
        console.log(user)
        event.preventDefault()
        axios.post(`http://localhost:3000/api/users/addOne`,user).then((result)=>{
            if(result.data.success){console.log(result.data)
                setData(result.data.message)
                navigate('/')}
              
                else {alert(result.data.message)}


        }).catch((err)=>{
            console.log(err)
        })
      }
  return (
    <div>
        <div className="signin-container">
       <form className="signin-form" onSubmit={handelUser}>
         <label htmlFor="nickname">Nickname</label>
         <br />
         <input
           type="text"
           id="nickname"
           name="nickname"
           required
           onChange={(e) => {
             setUser({ ...user, name: e.target.value });
           }}
         />
         <br />
         <label htmlFor="email">Email</label>
         <br />
         <input
           type="text"
           id="email"
           name="email"
           required
           onChange={(e) => {
             setUser({ ...user, email: e.target.value });
           }}
         />
         <br />
         <label htmlFor="password">Password</label>
         <br />
         <input
           type="password"
           id="password"
           name="password"
           required
           onChange={(e) => {
             setUser({ ...user, password: e.target.value });
           }}
         />
         <br />

         <br />
         <input type="submit" value="Sign in"  />
       </form>
     </div>
  
    </div>
  )
}

export default Singin