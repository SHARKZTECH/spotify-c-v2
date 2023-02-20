import React from 'react'
import USER from "../assets/user.jpeg"
import {AiFillHeart} from "react-icons/ai"

const RightSide = () => {
  return (
    <div className='right_side_container'>

        <div className='user_profile_container'>
            <img className='user_profile_img' src={USER} alt='user-profile'/>
            <div>
               <p>Sharkz Reigns</p>
               <p>Primium Member</p>
            </div>
        </div>

        <div className='mt-2'>
          <div className='recent_container_header'>
          <h6>Recent played</h6>
          <p>See All</p>
          </div>

          {Array.from({ length: 6 }).map((_, idx) => (
          <div className='recent_container_item'>
            <div className='song'>
            <img src={USER} alt="song_image"/>
            <div>
              <p>Song name</p>
              <p style={{color:"gray"}}>Artist Name</p>
            </div>
            </div>
             12min ago
          </div>
          ))}

          <div className='playing_song'>
              <img src={USER} alt="song_image"/>
              <div>
                <div>
                <p>Song Name</p>
                <p style={{color:"gray"}}>Artist name</p>                  
                </div>
             <AiFillHeart/>
              </div>
          </div>

        </div>
    </div>
  )
}

export default RightSide