import { useState,useEffect } from 'react'
import { Routes,HashRouter as Router,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [token,setToken]=useState("");

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
  },[])
  return (
    <div className="App">
      {!token ?(
        <Login/>
      ):(
        <Home/>
      )}
      
    </div>
  )
}

export default App
