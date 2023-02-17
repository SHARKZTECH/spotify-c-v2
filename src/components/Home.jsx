import React,{useState,useEffect} from 'react'
import Header from './Header';
import { Row,Col } from 'react-bootstrap';

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
          <div>Logo</div>
          <div>Home</div>
          <div>Trending</div>
          <div>Library</div>
          {artists?.map(artist=>(<h1>{artist.name}</h1>))}
        </Col>
        <Col md={6} sm={8}>
           <div>
            Mid
            <Header setArtists={setArtists}/>
             {artists?.map(artist=>(<h1>{artist.name}</h1>))}
           </div>
        </Col>
        <Col md={2} className="d-sm-none d-md-block">
          Right
          {artists?.map(artist=>(<h1>{artist.name}</h1>))}
        </Col>
      </Row>
    </div>
  )
}

export default Home