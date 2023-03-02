import React from 'react'
import { Table } from 'react-bootstrap'
import { AiFillHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Song from './Song'
import { time_ago } from './timeago';
import { formatTime } from './formartedTime';

export const TrackListContainer = ({spotify}) => {
    const {loading,search}=useSelector(state=>state.search);

  return (
    <div className='mt-2'>
      <Table striped hover>
        <thead>
        <tr>
            {/* <th>#</th> */}
            {/* <th>Title</th> */}
            {/* <th>Date Added</th> */}
            {/* <th>Time_Icon</th> */}
        </tr>
        </thead>
        <tbody>
         {loading ? "loading...":(
            <>
            {search?.tracks?.items.map((song,idx) => (
            <tr key={idx}>
                <td>{idx}</td>
                <td>
                <Song track={song} song={song} key={idx} spotify={spotify}/>
                </td>
                {/* <td>{time_ago(Date.now()-(song.added_at.slice(11,-1).split(":").reduce((x,y)=>x*y)*1000))}</td> */}
                <td><AiFillHeart/>{formatTime(song?.duration_ms)}</td>
            </tr>
            ))}             
            </>
         )}   
        </tbody>
        </Table>
    </div>
  )
}
