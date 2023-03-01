import { Card, Table } from 'react-bootstrap'
import Song from './Song'
import {AiFillHeart} from "react-icons/ai"
import IMG from "../assets/MPlayer.png"
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { formatTime } from './formartedTime';
import { time_ago } from './timeago';

const PlayListContainer = ({spotify,playlist_id}) => {
    const dispatch=useDispatch();
    const {playlist}=useSelector(state=>state.playlist);

    useEffect(()=>{
        spotify.getPlaylist('37i9dQZF1EpswxmXeGFls0').then(data=>{
            dispatch({"type":"GET_PLAYLIST_SUCCESS","payload":data})
           }).catch(error=>{
            console.log(error)
           })

    },[spotify])
  return (
   <div className='playlist_container'>        
        <Card className='bg-dark text-white mt-2 mb-1 playlist_container_header'>
            <Card.Img src={playlist?.images[0].url || IMG} alt="playlist" height={'200'}/>
            <Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                    <p>{playlist?.name}</p>
                    <h3>{playlist?.description}</h3>
                    <h5>{playlist?.owner.display_name}.{playlist?.tracks?.items.length} songs</h5>
                </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h6>Popular</h6>
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
        {playlist?.tracks?.items.map((song,idx) => (
        <tr key={idx}>
            <td>{idx}</td>
            <td>
            <Song track={song.track} key={idx}/>
            </td>
            <td>{time_ago(Date.now()-(song.added_at.slice(11,-1).split(":").reduce((x,y)=>x*y)*1000))}</td>
            <td><AiFillHeart/>{formatTime(song.track.duration_ms)}</td>
        </tr>
        ))}             
        </tbody>
        </Table>

  </div>
  )
}

export default PlayListContainer