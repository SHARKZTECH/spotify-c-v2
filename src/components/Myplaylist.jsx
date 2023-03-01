import React,{useEffect,useLayoutEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { getMyPlayLists } from '../redux/actions/SongAction';

const Myplaylist = ({setPlaylistId,setLikedSongs,active}) => {
    const [token,setToken]=useState("");
    // const [playlists,setPlaylists]=useState([]);

    const dispatch=useDispatch();
    const {playlists,success,loading}=useSelector(state=>state.myplaylists);
  
    useEffect(()=>{
      setToken(window.localStorage.getItem("token"));    
    },[])
  
    useLayoutEffect(()=>{
      if(token != ""){
        // playerState();
        dispatch(getMyPlayLists());    
      }
    },[token])

    const handleClick=(id)=>{
      dispatch({"type":"GET_PLAYLIST_RESET"});
      setLikedSongs(false)
      setPlaylistId(id)
    }


  return (
    <div className={active=="playlists" ? "my_playlists" : "none"}>
      {loading ? "loading...": (
        <>
       {playlists?.map(playlist=>(
        <p key={playlist.id} onClick={()=>handleClick(playlist.id)}>{playlist.name}</p>
       ))}
       </>
       )}
    </div>
)
}

export default Myplaylist