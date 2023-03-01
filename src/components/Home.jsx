import React,{useState,useEffect} from 'react'
import Header from './Header';
import { Row,Col } from 'react-bootstrap';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MiddleSide from './MiddleSide';
import Player from './Player';

const Home = ({spotify}) => {
  const [token,setToken]=useState("");
  const [playlist_id,setPlaylistId]=useState("37i9dQZF1EpswxmXeGFls0");
  const [likedSongs,setLikedSongs]=useState(false);
  const [search,setSearch]=useState(false);


  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
  },[])

  return (
    <div className='home_container'>
      <Row>
        <Col md={3} sm={4}>
          <LeftSide setPlaylistId={setPlaylistId} setLikedSongs={setLikedSongs} setSearch={setSearch}/>
        </Col>

        <Col md={6} sm={8}>
           <div>   
            <Header  search={search}/>
            <MiddleSide  spotify={spotify} playlist_id={playlist_id} likedSongs={likedSongs} search={search}/>
            {/* <Player/> */}
           </div>
        </Col>

        <Col md={3} className="d-sm-none d-md-block">
          <RightSide spotify={spotify}/>
        </Col>
      </Row>
    </div>
  )
}

export default Home