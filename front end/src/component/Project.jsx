import React, { useState } from 'react'
// import Footer from './footer'
import MyData from './MyData'
import NaveBar from './NavBar'
import ScrollToTopButton from './ScrollToTopButton'

function Project() {
  const [datatorender,setDataToRender] = useState([])
  console.log(window.scrollYOffset)
  
  return (
    <div>
      <NaveBar setDataToRender = {setDataToRender}/>
       <MyData datatorender={datatorender}/>
       <ScrollToTopButton/>
       {/* <Footer/>  */}
    </div>
  )
}

export default Project