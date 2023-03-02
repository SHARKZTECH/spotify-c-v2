import React,{useState,useEffect} from 'react'
import USER from "../assets/user.jpeg"
import {AiFillHeart} from "react-icons/ai"
import Song from './Song'
import {useSelector } from 'react-redux'
import { time_ago } from './timeago';

const RightSide = ({spotify}) => {
  const {user}=useSelector(state=>state.user);
  const {currentSong}=useSelector(state=>state.currentSong);
  const {recent}=useSelector(state=>state.recent);
  const {audio_features}=useSelector(state=>state.audio_features)

  //ANIMATION
  const [shadowSize, setShadowSize] = useState(0);
  useEffect(() => {
    const danceability = audio_features.danceability; // Get danceability value from song object
    const energy = audio_features.energy; // Get energy value from song object

    // Calculate shadow size based on danceability and energy values
    const minShadowSize = 0;
    const maxShadowSize = 50;
    const shadowSizeRange = maxShadowSize - minShadowSize;
    const shadowSizeIncrement = shadowSizeRange / 1; // Divide by a number to adjust the range of the shadow size
    const shadowSizeValue = Math.floor(
      (danceability + energy) * shadowSizeIncrement
    );

    // Animate shadow size over time
    let animationIntervalId;
    if (shadowSizeValue > 0) {
      const animationDuration = 500; // Set animation duration in milliseconds
      const animationSteps = 10; // Set number of animation steps
      const animationStepIncrement = shadowSizeValue / animationSteps;

      let currentShadowSize = 0;
      let currentStep = 0;

      animationIntervalId = setInterval(() => {
        setShadowSize(currentShadowSize);
        currentShadowSize += animationStepIncrement;
        currentStep++;

        if (currentStep >= animationSteps) {
          clearInterval(animationIntervalId);
          setShadowSize(shadowSizeValue);
        }
      }, animationDuration / animationSteps);
    }

    // Clean up animation interval when component unmounts or when song changes
    return () => {
      clearInterval(animationIntervalId);
      setShadowSize(0);
    };
  }, [audio_features]);


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
              <div
                   style={{
                    boxShadow: `${shadowSize*.6}px ${shadowSize*.8}px ${shadowSize*.5}px ${shadowSize*.9}px rgba(200,0,200, 0.5)`,
                    transition: 'box-shadow 0.5s ease-out',
                    width: '100%',
                    height: '100%',
                  }}>
              <img src={currentSong?.item?.album.images[0].url} alt="song_image"/>
             </div>  
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