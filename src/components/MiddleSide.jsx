import LikedContainer from './LikedContainer';
import MyLibrary from './MyLibrary';
import Player from "./Player";
import PlayListContainer from './PlayListContainer';
import { TrackListContainer } from './TrackListContainer';


const MiddleSide = ({spotify,playlist_id,likedSongs,search,artists,home,setPlaylistId,setLikedSongs,setSearch,setHome}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
         {likedSongs ?(
           <LikedContainer/>
         ) : search ?(
          <>
            <TrackListContainer spotify={spotify}/>
          </>
         ):home ?(
          <MyLibrary 
          setPlaylistId={setPlaylistId} setLikedSongs={setLikedSongs} setSearch={setSearch} setHome={setHome}/>
         ):(
          <PlayListContainer spotify={spotify} playlist_id={playlist_id}/>  
         )}


         <Player spotify={spotify}/>

       </div>


    </div>
  )
}

export default MiddleSide