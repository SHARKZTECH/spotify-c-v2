import React,{useEffect,useLayoutEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { getMyPlayLists } from '../redux/actions/SongAction';

const Myplaylist = () => {
    const [token,setToken]=useState("");
    const [playlists,setPlaylists]=useState([]);

    const dispatch=useDispatch();
    const {myplalists}=useDispatch(state=>state.myplalists);
  
    useEffect(()=>{
      setToken(window.localStorage.getItem("token"));    
    },[])
  
    useLayoutEffect(()=>{
      if(token != ""){
        // playerState();
        dispatch(getMyPlayLists());
      }
    },[token])

    setPlaylists(myplalists);
  
    const playerState = async () => {
      const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
              Authorization: `Bearer ${token}`
          }   
      })
      // setPlaylists(data.items)
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