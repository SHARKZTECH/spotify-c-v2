import React, { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'
import ICON from "../assets/icon1.png";

const Login = () => {
  // https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

  // Replace with your app's client ID, redirect URI and desired scopes

  const CLIENT_ID = "0957e11683e846679d1076e5c4c95afe"
  // const REDIRECT_URI = "https://sharkztech.github.io/spotify-c-v2/"
  const REDIRECT_URI ="http://localhost:5173/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  const url=`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes.join(
  "%20"
  )}&response_type=token&show_dialog=true`

  const [token,setToken]=useState(""); 

  useEffect(()=>{
    const hash=window.location.hash;
    let token=window.localStorage.getItem("token");

    // console.log("Hash :",hash);
    // console.log("Token :",token);

    if(!token && hash){
      token=hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1];
      window.localStorage.setItem("token",token);
      window.location.hash=""
    }

    setToken(token);
 
  },[])



  return (
    <>
      <div className='login_container'>
        <img className='logo' src={ICON}  alt="logo"></img>
        <div>
        
        <Button 
        onClick={()=>window.open(url,"_self")}
        variant='success' className='px-3'>Login With Spotify</Button>       
        </div>
      </div>    
    </>
  )
}

export default Login