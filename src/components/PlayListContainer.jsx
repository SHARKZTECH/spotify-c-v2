import { Card, Table } from 'react-bootstrap'
import Song from './Song'
import {AiFillHeart} from "react-icons/ai"
import IMG from "../assets/MPlayer.png"

const PlayListContainer = () => {
  return (
   <div className='playlist_container'>        
        <Card className='bg-dark text-white mt-2 mb-1 playlist_container_header'>
            <Card.Img src={IMG} alt="playlist" height={'200'}/>
            <Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                    <p>PlayList</p>
                    <h3>Liked</h3>
                    <h5>SHARKZTECH.127 songs</h5>
                </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h6>Popular</h6>
        <p>See All</p>
        </div>

        <Table striped hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date Added</th>
            <th>Time_Icon</th>
        </tr>
        </thead>
        <tbody>
        {Array.from({ length: 4 }).map((_, idx) => (
        <tr>
            <td>1</td>
            <td>
            <Song/>
            </td>
            <td>Life is Good</td>
            <td>11 days ago</td>
            <td><AiFillHeart/> 3.14</td>
        </tr>
        ))}             
        </tbody>
        </Table>

  </div>
  )
}

export default PlayListContainer