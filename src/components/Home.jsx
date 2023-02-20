import React,{useState,useEffect} from 'react'
import Header from './Header';
import { Row,Col } from 'react-bootstrap';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MiddleSide from './MiddleSide';

const Home = () => {
  const [token,setToken]=useState("");
  const [artists,setArtists]=useState([]);

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
  },[])

  return (
    <div className='home_container'>
      <Row>
        <Col md={3} sm={4}>
          <LeftSide/>
          {/* {artists?.map(artist=>(<h1>{artist.name}</h1>))} */}
        </Col>

        <Col md={6} sm={8}>
           <div>   
            <Header setArtists={setArtists}/>
            <MiddleSide artists={artists}/>
           </div>
        </Col>

        <Col md={3} className="d-sm-none d-md-block">
          <RightSide/>
        </Col>
      </Row>
    </div>
  )
}

export default Home