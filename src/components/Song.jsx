import React, { useState } from 'react'
import USER from "../assets/user.jpeg"


const Song = ({song,spotify}) => {

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
    <div className='song' onClick={()=>handlePlay(song?.track?.uri)}>
    <img src={song?.track?.album.images[0].url || USER} alt="song_image"/>
    <div>
      <p>{song?.track?.name || "Song name"} </p>
      <p style={{color:"#acacac"}}>{song?.track?.artists.map((artist=>artist.name)).join(", ") || "Artists"} </p>
    </div>
    </div>
  )
}

export default Song