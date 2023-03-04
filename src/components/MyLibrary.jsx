import React, { useEffect } from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const MyLibrary = ({setPlaylistId,setLikedSongs,setSearch,setHome}) => {
  const dispatch=useDispatch()
  const {playlists,success,loading}=useSelector(state=>state.myplaylists);
  const {top}=useSelector(state=>state.top);
  const {weekly}=useSelector(state=>state.weekly);
  const {reapet}=useSelector(state=>state.reapet);

  const handleWeeklyDiscover=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setPlaylistId("37i9dQZEVXcJZyENOWUFo7"); //37i9dQZEVXcLFgyIoBZXFl
  }

  const handleLoves=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setPlaylistId("37i9dQZF1EpswxmXeGFls0");
  }

  const handleTop=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setPlaylistId("37i9dQZF1F0sijgNaJdgit");
  }

 

  const PlayList=()=>{
    const dispatch=useDispatch();
    const handleClick=(id)=>{
      dispatch({"type":"GET_PLAYLIST_RESET"});
      setLikedSongs(false)
      setSearch(false);
      setHome(false)
      setPlaylistId(id)
    }
    return(
      <div className='mt-1'>
      <h4>PlayLists</h4>
      <Row xs={2} md={3} className="g-2">
        {playlists?.map((playlist, idx) => (
          <Col key={idx}>
            <Card style={{height:"300px"}} onClick={()=>handleClick(playlist?.id)}>
              <Card.Img variant="top" src={playlist?.images[0].url} />
              <Card.Body>
                <Card.Text style={{marginTop:"-20px"}}>{playlist?.name}</Card.Text>
                <Card.Title style={{marginTop:"-10px"}}>{playlist?.owner.display_name}</Card.Title>                                 
              </Card.Body>
            </Card>
          </Col>
        ))}
       </Row>
    </div>
    )
  }
  return (
    <div>
      <div className='d-none align-items-center justify-content-around mx-3  bg-primary p-1'>
        <h5>Playlist</h5>
        <h5>Artists</h5>
        <h5>Albums</h5>
      </div>
      <div>
        <h4>Discover</h4>
        <Row>
          <Col>
            <Card style={{height:"300px"}} onClick={handleLoves}>
              <Card.Img variant="top" src={reapet?.images[0].url} />
              <Card.Body>
                <Card.Text style={{marginTop:"-20px"}}>{reapet?.name}</Card.Text>
                <Card.Title style={{marginTop:"-10px"}}>{reapet?.owner.display_name}</Card.Title>                                 
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{height:"300px"}} onClick={handleWeeklyDiscover}>
              <Card.Img variant="top" src={weekly?.images[0].url} />
              <Card.Body>
                <Card.Text style={{marginTop:"-20px"}}>{weekly?.name}</Card.Text>
                <Card.Title style={{marginTop:"-10px"}}>{weekly?.owner.display_name}</Card.Title>                                 
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{height:"300px"}} onClick={handleTop}>
              <Card.Img variant="top" src={top?.images[0].url} />
              <Card.Body>
                <Card.Text style={{marginTop:"-20px"}}>{top?.name}</Card.Text>
                <Card.Title style={{marginTop:"-10px"}}>{top?.owner.display_name}</Card.Title>                                 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <PlayList/>
    </div>
  )
}

export default MyLibrary