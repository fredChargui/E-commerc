import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import Login from './component/Login.jsx'
import Singin from "./component/Singin.jsx";
import Project from "./component/Project.jsx";
import AddPost from "./component/AddPost.jsx";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign" element = {<Singin/>}/>
      <Route path="/Project" element = {<Project/>}/>
      <Route path="/AddPost" element = {<AddPost/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
