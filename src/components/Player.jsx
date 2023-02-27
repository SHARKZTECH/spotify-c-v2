import React,{useEffect,useState,useLayoutEffect} from 'react'
import {MdCast,MdPlayCircleFilled,MdPauseCircle,MdSkipNext,MdSkipPrevious,MdShuffle,MdShuffleOn,MdRepeat,MdRepeatOneOn,MdRepeatOn,MdVolumeMute,MdVolumeUp,MdVolumeOff} from "react-icons/md"
import {CgPlayList} from "react-icons/cg"
import { IconContext } from 'react-icons'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'

const Player = ({spotify}) => {
  const [token,setToken]=useState("");
  const dispatch=useDispatch();
  const {currentSong}=useSelector(state=>state.currentSong)

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));    
  },[])

  useLayoutEffect(()=>{
    if(token != ""){
      // playerState();           
      spotify.getMyCurrentPlayingTrack().then(data=>{
        // console.log(data)
        dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});

      }).catch(error=>{
        console.log(error)
      })

    }

    // const intervalId = setInterval(() => {
    //   if(token != ""){
    //     playerState();
    //   }  
    // }, 2000);
    // return () => clearInterval(intervalId);

  },[token,dispatch])

  // const playerState = async () => {
  //   dispatch({"type":"GET_CURRENT_SOGN_REQUEST"})
  //   const {data} = await axios.get("https://api.spotify.com/v1/me/player", {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       }   
  //   })

  //   dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});
  // }


  // console.log(song)
  return (
    <div className='player_container'>
      {currentSong ?(
           <>
           <div>
             <p>{currentSong?.item?.name}{"\t "}Artist:{currentSong?.item?.artists.map(artist=>artist.name)}</p>
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