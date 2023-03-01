import React,{useEffect,useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Header = ({search}) => {
    const [token,setToken]=useState("");
    const [searchKey,setSearchKey]=useState("");
    const dispatch=useDispatch();

    useEffect(()=>{
      setToken(window.localStorage.getItem("token"));
    },[])
  
    const searchArtists = async (e) => {
      e.preventDefault()
       dispatch({"type":"GET_SEARCH_REQUEST"})
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "track"
          }
      })
      dispatch({"type":"GET_SEARCH_SUCCESS","payload":data})
      // console.log(data)
    }

  return (
    <div className={search ? 'header_container' : "none"}>
      <Form.Group>
        <Form.Control type='text' placeholder='Search artist'
        onChange={(e)=>setSearchKey(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button onClick={searchArtists}>Search</Button>
    </div>
  )
}

export default Header