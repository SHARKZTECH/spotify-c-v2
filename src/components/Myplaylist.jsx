import React,{useEffect,useLayoutEffect,useState} from 'react'
import axios from 'axios';

const Myplaylist = () => {
    const [token,setToken]=useState("");
    const [playlists,setPlaylists]=useState([]);
  
    useEffect(()=>{
      setToken(window.localStorage.getItem("token"));    
    },[])
  
    useLayoutEffect(()=>{
      if(token != ""){
        playerState();
      }
    },[token])
  
    const playerState = async () => {
      const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
              Authorization: `Bearer ${token}`
          }   
      })
      setPlaylists(data.items)
    }
  
  return (
    <div className='my_playlists'>
       {playlists.map(playlist=>(
        <p key={playlist.id}>{playlist.name}</p>
       ))}
    </div>
)
}

export default Myplaylist