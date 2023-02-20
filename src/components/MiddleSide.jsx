import React from 'react'
import { Table } from 'react-bootstrap'
import Song from './Song'
import {AiFillHeart} from "react-icons/ai"


const MiddleSide = ({artists}) => {
  return (
    <div className='middleSide_conatiner'>
       <div>
         <div>
          
         </div>
         <div>
           <div>
              <h6>Popular</h6>
              <p>See All</p>
           </div>
           <div>

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
            {Array.from({ length: 6 }).map((_, idx) => (
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
         </div>
       </div>

     {artists?.map(artist=>(<h1>{artist.name}</h1>))}
    </div>
  )
}

export default MiddleSide