import React,{useEffect,useState,useLayoutEffect} from 'react'
import {MdCast,MdPlayCircleFilled,MdPauseCircle,MdSkipNext,MdSkipPrevious,MdShuffle,MdShuffleOn,MdRepeat,MdRepeatOneOn,MdRepeatOn,MdVolumeMute,MdVolumeUp,MdVolumeOff} from "react-icons/md"
import {CgPlayList} from "react-icons/cg"
import { IconContext } from 'react-icons'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { ProgressBar } from 'react-bootstrap'
import { formatTime } from './formartedTime'

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
      dispatch({"type":"GET_CURRENT_SONG_REQUEST"})         
      spotify.getMyCurrentPlayingTrack().then(data=>{
        // console.log(data)
        dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});

      }).catch(error=>{
        dispatch({"type":"GET_CURRENT_SONG_FAIL","payload":error.message})
        console.log(error)
      })

    }

    const intervalId = setInterval(() => {
      spotify.getMyCurrentPlayingTrack().then(data=>{
        // console.log(data)
        dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});

      }).catch(error=>{
        dispatch({"type":"GET_CURRENT_SONG_FAIL","payload":error.message})
        console.log(error)
      }) 
    }, 1000);
    return () => clearInterval(intervalId);

  },[token,dispatch,spotify])

  // const playerState = async () => {
  //   dispatch({"type":"GET_CURRENT_SOGN_REQUEST"})
  //   const {data} = await axios.get("https://api.spotify.com/v1/me/player", {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       }   
  //   })

  //   dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});
  // }
  
  const handlePausePlay=()=>{
    if(currentSong?.is_playing){
      spotify.pause();
    }else{
      spotify.play();
    }
  }

  const skipNext=()=>{
    spotify.skipToNext();

    spotify.getMyCurrentPlayingTrack().then(data=>{
      // console.log(data)
      dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});

    }).catch(error=>{
      dispatch({"type":"GET_CURRENT_SONG_FAIL","payload":error.message})
      console.log(error)
    })
  }
  const skipToPrevious=()=>{
    spotify.skipToPrevious();

    spotify.getMyCurrentPlayingTrack().then(data=>{
      // console.log(data)
      dispatch({"type":"GET_CURRENT_SONG_SUCCESS","payload":data});

    }).catch(error=>{
      dispatch({"type":"GET_CURRENT_SONG_FAIL","payload":error.message})
      console.log(error)
    })
  }

  return (
    <div className='player_container'>
      {currentSong ?(
           <>
           <div>
             <p>{currentSong?.item?.name}{"\t "}Artist:{currentSong?.item?.artists.map(artist=>artist.name).join(", ")}</p>
           </div>
           <IconContext.Provider value={{ className: 'react-icons' ,size : "25"}}>
           <div className='player_icons_container'>
             <div>
                 <CgPlayList/>
                 <MdCast/> 
              </div>   
     
              <div>
               <MdShuffle/>
               <MdSkipPrevious onClick={skipToPrevious}/>
               {currentSong?.is_playing ? 
               (<MdPauseCircle onClick={handlePausePlay}/>): 
               (<MdPlayCircleFilled onClick={handlePausePlay}/>)}
               <MdSkipNext onClick={skipNext}/>   
               <MdRepeat/>       
              </div>
     
             <div>
               <MdVolumeMute/>
               <MdVolumeUp/>
             </div>
           </div>
           </IconContext.Provider>
           <div className='progress_bar_container'>
               <p>{formatTime(currentSong?.progress_ms)}</p>
              <ProgressBar className='progress_bar' 
              now={currentSong?.progress_ms}
               max={currentSong?.item.duration_ms}
               animated/>
               <p>{formatTime(currentSong?.item.duration_ms)}</p>
           </div>
           </>
           
      ):(
        <p>No song currently playing...</p>
      )}

    </div>
  )
}

export default Player