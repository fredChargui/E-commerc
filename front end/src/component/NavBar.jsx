import React, { useEffect, useState } from 'react'
import './NavBar.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AddPost from './AddPost'
function NaveBar({setDataToRender}) {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  const [filtred,setFiltred] = useState([])
  const navigate = useNavigate()
const handelNavigation = () => {
    navigate('/')
}
const handelNavi = () => {
    navigate('/AddPost')
}
  const handlechange =(event)=>{
    setSearch(event.target.value)
    }
    const handelSubmit = () =>{
      axios.get('http://localhost:3000/api/posts/getAll').then((res)=>{
        setData(res.data)
        console.log(res.data)
          }).catch((err)=>{
            console.log(err)
          })
    }
    useEffect(()=>{
      handelSubmit()
    },[])
    const newsearch =()=>{
      const result = data.filter((element)=>{
      return element.postname.toLowerCase()=== search.toLowerCase()
     
     })
     setDataToRender(result) 
     console.log(filtred);
     
    
  }
  return (
    <div id = 'ayid'>
         

        <ul>
          <li>
            <a>
            <input type='text' placeholder='search here' onChange={handlechange}/>
            <button onClick={()=>{newsearch()}}>search</button>
            </a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li><a onClick={handelNavi}>add Categorie</a></li>  
         <li > <a onClick={handelNavigation}>logout</a></li>  
        </ul>
       
    </div>
  )
}

export default NaveBar