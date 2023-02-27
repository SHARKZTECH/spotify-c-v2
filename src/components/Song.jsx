import React from 'react'
import USER from "../assets/user.jpeg"


const Song = ({track}) => {
  return (
    <div className='song'>
    <img src={USER} alt="song_image"/>
    <div>
      <p>{track?.name || "Song name"} </p>
      <p style={{color:"gray"}}>{track?.artists.map((artist=>artist.name)).join(", ") || "Artists"} </p>
    </div>
    </div>
  )
}

export default Song