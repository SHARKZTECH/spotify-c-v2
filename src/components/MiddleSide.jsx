import React from 'react'
import Player from "./Player";
import PlayListContainer from './PlayListContainer';


const MiddleSide = ({artists,spotify,playlist_id}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
 
         <PlayListContainer spotify={spotify} playlist_id={playlist_id}/>  
         {artists?.map(artist=>(<h1>{artist.name}</h1>))}
         <Player spotify={spotify}/>

       </div>


    </div>
  )
}

export default MiddleSide