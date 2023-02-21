import React from 'react'
import {MdCast,MdPlayCircleFilled,MdPauseCircle,MdSkipNext,MdSkipPrevious,MdShuffle,MdShuffleOn,MdRepeat,MdRepeatOneOn,MdRepeatOn,MdVolumeMute,MdVolumeUp,MdVolumeOff} from "react-icons/md"
import {CgPlayList} from "react-icons/cg"
import { IconContext } from 'react-icons'

const Player = () => {
  return (
    <div className='player_container'>
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

    </div>
  )
}

export default Player