import { Button, Card, Table } from 'react-bootstrap'
import Song from './Song'
import {AiFillHeart} from "react-icons/ai"
import IMG from "../assets/MPlayer.png"
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { formatTime } from './formartedTime';
import { time_ago } from './timeago';
import {MdOutlinePlayCircleFilled,MdPauseCircle} from "react-icons/md"

const PlayListContainer = ({spotify,playlist_id}) => {
    const dispatch=useDispatch();
    const {loading,playlist}=useSelector(state=>state.playlist);
    const {currentSong}=useSelector(state=>state.currentSong)


    useEffect(()=>{
        dispatch({"type":"GET_PlAYLIST_REQUEST"})
        spotify.getPlaylist(playlist_id).then(data=>{
            dispatch({"type":"GET_PLAYLIST_SUCCESS","payload":data})
           }).catch(error=>{
            console.log(error)
           })

    },[spotify,playlist_id])

    const playPlayList=(Uri)=>{
        if(currentSong.is_playing  && currentSong?.context?.uri.split(":")[2]==playlist_id){
            spotify.pause();
        }else{
            spotify.play({
                context_uri:Uri
            }).then(()=>{
                console.log("playing playlist success")
            }).catch(err=>{
                console.log(err);
            })
        }

    }
    
  return (
   <div className='playlist_container'>        
        <Card className='bg-dark text-white mt-2 mb-1 playlist_container_header'>
            <Card.Img src={playlist?.images[0].url || IMG} alt="playlist" height={'200'}/>
            <Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                    {loading? "loading...":(
                        <>
                        <h3>{playlist?.name}</h3>
                        <p style={{display:"none"}}>{playlist?.description}</p>
                        <h5>{playlist?.owner.display_name}.{playlist?.tracks?.items.length} songs</h5>
                        </>
                    )}
                </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>

        {/* <div style={{display:"flex",justifyContent:"space-between"}}> */}
        <div>
        <h6>Popular</h6>
        <div className='play_list_button'>
            {currentSong?.is_playing && currentSong?.context?.uri.split(":")[2]==playlist_id ?(
                 <MdPauseCircle size={40} onClick={()=>playPlayList(playlist.uri)}/> 
            ):(
                <MdOutlinePlayCircleFilled size={40} onClick={()=>playPlayList(playlist.uri)}/>
            )}
        </div>
        <p style={{display:"none"}}>See All</p>
        </div>

        <Table striped hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date Added</th>
            <th>Time_Icon</th>
        </tr>
        </thead>
        <tbody>
         {loading ? "loading...":(
            <>
            {playlist?.tracks?.items.map((song,idx) => (
            <tr key={idx}>
                <td>{idx}</td>
                <td>
                <Song song={song} track={song?.track} key={idx} spotify={spotify}/>
                </td>
                <td>{time_ago(Date.now()-(song.added_at.slice(11,-1).split(":").reduce((x,y)=>x*y)*1000))}</td>
                <td><AiFillHeart/>{formatTime(song.track.duration_ms)}</td>
            </tr>
            ))}             
            </>
         )}   
        </tbody>
        </Table>

  </div>
  )
}

export default PlayListContainer