import React, { useState } from 'react'
import USER from "../assets/user.jpeg"


const Song = ({song,track,spotify}) => {

  const handlePlay=(songUri)=>{
    spotify.play({
      uris:[songUri],
      // context_uri:""
    }).then(()=>{
      console.log("playing succesful")
    }).catch(err=>{
      console.log(err)
    });
  }

  return (
    <div className='song' onClick={()=>handlePlay(track?.uri)}>
    <img src={track?.album.images[0].url || USER} alt="song_image"/>
    <div>
      <p>{track?.name || "Song name"} </p>
      <p style={{color:"#acacac"}}>{track?.artists.map((artist=>artist.name)).join(", ") || "Artists"} </p>
    </div>
    </div>
  )
}

export default Song