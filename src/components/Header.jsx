import React,{useEffect,useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Header = ({setArtists}) => {
    const [token,setToken]=useState("");
    const [searchKey,setSearchKey]=useState("");

    useEffect(()=>{
      setToken(window.localStorage.getItem("token"));
    },[])
  
    const searchArtists = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "artist"
          }
      })
  
      console.log(data.artists.items)
      setArtists(data.artists.items)    
    }

  return (
    <>
      <Form.Group>
        <Form.Control type='text' placeholder='Search artist'
        onChange={(e)=>setSearchKey(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button onClick={searchArtists}>Search</Button>
    </>
  )
}

export default Header