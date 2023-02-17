import React, { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'
import ICON from "../assets/icon1.png";

const Login = () => {
  const CLIENT_ID = "0957e11683e846679d1076e5c4c95afe"
  const REDIRECT_URI = "http://localhost:5173/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const url=`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

  const [token,setToken]=useState(""); 

  useEffect(()=>{
    const hash=window.location.hash;
    let token=window.localStorage.getItem("token");

    // console.log("Hash :",hash);
    // console.log("Token :",token);

    if(!token && hash){
      token=hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1];
      window.location.hash=""
      window.localStorage.setItem("token",token);
    }

    setToken(token);
 
  },[])



  return (
    <>
      <div className='login_container'>
        <img className='logo' src={ICON}  alt="logo"></img>
        <div>
        
        <Button 
        onClick={()=>window.open(url)}
        variant='success' className='px-3'>Login With Spotify</Button>       
        </div>
      </div>    
    </>
  )
}

export default Login