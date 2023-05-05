import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function login() {
  const navigate = useNavigate()
    const [data,setData]= useState([])
    const [user,setUser] = useState({email:'',password:''})
    const handUser = (event) => {
      event.preventDefault()
        axios.get(`http://localhost:3000/api/users/${user.email}/${user.password}`).then((result)=>{
          if(result.data.length){
            console.log(result.data)
            setData(result.data)
            navigate('/Project')
          }
          else {
            alert('anvalaid email and password')
          }
         
        }).catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <div className="login-container">
    <form className="login-form" onSubmit={(e)=>handUser(e)}>
      <label htmlFor="email">Email</label><br />
      <input type="text" id="email" name="email" required onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
      <br />
      <label htmlFor="password">Password</label><br />
      <input type="password" id="password" name="password"required autoComplete='off' onChange={(e)=>{setUser({...user,password:e.target.value})}} />
      <br />
      <input type="submit" value="Login" />
      <input type="submit" value="Sign in" onClick={()=>navigate('/sign')}/>
      </form>
      </div>
  )
}

export default login