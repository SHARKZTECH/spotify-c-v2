import React from 'react'
import Player from "./Player";
import PlayListContainer from './PlayListContainer';


const MiddleSide = ({artists,spotify}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
 
         <PlayListContainer/>  
         {artists?.map(artist=>(<h1>{artist.name}</h1>))}
         <Player spotify={spotify}/>

       </div>


    </div>
  )
}

export default MiddleSide