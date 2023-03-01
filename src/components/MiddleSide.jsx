import LikedContainer from './LikedContainer';
import Player from "./Player";
import PlayListContainer from './PlayListContainer';
import { TrackListContainer } from './TrackListContainer';


const MiddleSide = ({spotify,playlist_id,likedSongs,search,artists}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
         {likedSongs ?(
           <LikedContainer/>
         ) : search ?(
          <>
            <TrackListContainer spotify={spotify}/>
          </>
         ):(
          <PlayListContainer spotify={spotify} playlist_id={playlist_id}/>  
         )}


         <Player spotify={spotify}/>

       </div>


    </div>
  )
}

export default MiddleSide