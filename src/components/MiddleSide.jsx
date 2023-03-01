import LikedContainer from './LikedContainer';
import Player from "./Player";
import PlayListContainer from './PlayListContainer';


const MiddleSide = ({artists,spotify,playlist_id,likedSongs}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
         {likedSongs ?(
           <LikedContainer/>
         ) : (
          <PlayListContainer spotify={spotify} playlist_id={playlist_id}/>  
         )}
         {artists?.map(artist=>(<h1>{artist.name}</h1>))}
         <Player spotify={spotify}/>

       </div>


    </div>
  )
}

export default MiddleSide