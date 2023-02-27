import React,{useEffect,useLayoutEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { getMyPlayLists } from '../redux/actions/SongAction';

const Myplaylist = ({setPlaylistId}) => {
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
      setPlaylistId(id)
    }


  return (
    <div className='my_playlists'>
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