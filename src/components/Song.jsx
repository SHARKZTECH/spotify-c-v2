import React from 'react'
import USER from "../assets/user.jpeg"


const Song = () => {
  return (
    <div className='song'>
    <img src={USER} alt="song_image"/>
    <div>
      <p>Song name</p>
      <p style={{color:"gray"}}>Artist Name</p>
    </div>
    </div>
  )
}

export default Song