import React,{useEffect,useState,useLayoutEffect} from 'react'
import {MdCast,MdPlayCircleFilled,MdPauseCircle,MdSkipNext,MdSkipPrevious,MdShuffle,MdShuffleOn,MdRepeat,MdRepeatOneOn,MdRepeatOn,MdVolumeMute,MdVolumeUp,MdVolumeOff} from "react-icons/md"
import {CgPlayList} from "react-icons/cg"
import { IconContext } from 'react-icons'
import axios from 'axios'

const Player = () => {
  const [token,setToken]=useState("");
  const [song,setSong]=useState({});

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));    
  },[])

  useLayoutEffect(()=>{
    if(token != ""){
      playerState();
    }
  },[token])

  const playerState = async () => {
    const {data} = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
            Authorization: `Bearer ${token}`
        }   
    })
    setSong(data)
  }

  console.log(song)
  return (
    <div className='player_container'>
      {song ?(
           <>
           <div>
             <p>{song?.item?.name}{"\t "}Artist:{song?.item?.artists.map(artist=>artist.name)}</p>
           </div>
           <IconContext.Provider value={{ className: 'react-icons' ,size : "25"}}>
           <div className='player_icons_container'>
             <div>
                 <CgPlayList/>
                 <MdCast/> 
              </div>   
     
              <div>
               <MdShuffle/>
               <MdSkipPrevious/>
               <MdPlayCircleFilled/>
               <MdSkipNext/>   
               <MdRepeat/>       
              </div>
     
             <div>
               <MdVolumeMute/>
               <MdVolumeUp/>
             </div>
           </div>
           </IconContext.Provider>
           </>
      ):(
        <p>No song currently playing...</p>
      )}

    </div>
  )
}

export default Player