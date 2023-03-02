import React from 'react'
import USER from "../assets/user.jpeg"
import {AiFillHeart} from "react-icons/ai"
import Song from './Song'
import {useSelector } from 'react-redux'
import { time_ago } from './timeago';

const RightSide = ({spotify}) => {
  const {user}=useSelector(state=>state.user);
  const {currentSong}=useSelector(state=>state.currentSong);
  const {recent}=useSelector(state=>state.recent);


  return (
    <div className='right_side_container'>

        <div className='user_profile_container'>
            <img className='user_profile_img' src={USER} alt='user-profile'/>
            <div>
               <p>{user?.display_name}</p>
               <p>Primium Member</p>
            </div>
        </div>

        <div className='mt-2'>
          <div className='recent_container_header'>
          <h6>Recent played</h6>
          <p style={{display:"none"}}>See All</p>
          </div>

        <div className='recent_container'>
          {recent?.items.map((item, idx) => (
          <div className='recent_container_item' key={idx}>
            <div>
             <Song song={item} key={idx} spotify={spotify}/>
            </div>
            {time_ago(Date.now()-(item.played_at.slice(11,-1).split(/[:.]/).reduce((x,y)=>x*y)))}
          </div>
          ))}
        </div>

          <div className='playing_song'>
            {currentSong? (   
              <>         
              <img src={currentSong?.item?.album.images[0].url} alt="song_image"/>
              <div>
                <div>
                <p>{currentSong?.item?.name}</p>
                <p style={{color:"gray"}}>{currentSong?.item?.artists.map(artist=>artist.name).join(", ")}</p>                  
                </div>
             <AiFillHeart/>
              </div>
              </>
          ): "No Song Playing "}
          </div>

        </div>
    </div>
  )
}

export default RightSide