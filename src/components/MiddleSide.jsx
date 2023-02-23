import React from 'react'
import Player from "./Player";
import PlayListContainer from './PlayListContainer';


const MiddleSide = ({artists}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
 
         <PlayListContainer/>  
         {artists?.map(artist=>(<h1>{artist.name}</h1>))}
         <Player/>

       </div>


    </div>
  )
}

export default MiddleSide