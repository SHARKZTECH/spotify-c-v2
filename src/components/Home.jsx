import React,{useState,useEffect} from 'react'
import Header from './Header';

const Home = () => {
  const [token,setToken]=useState("");
  const [artists,setArtists]=useState([]);

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
  },[])

  return (
    <>
      <Header setArtists={setArtists}/>

      {artists?.map(artist=>(<h1>{artist.name}</h1>))}
    </>
  )
}

export default Home