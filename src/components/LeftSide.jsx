import React from 'react'
import LOGO from "../assets/icon1.png";
import {AiFillHome,AiOutlineHeart,AiOutlineCalendar} from "react-icons/ai"
import {BsMusicNoteBeamed,BsFillPersonCheckFill} from "react-icons/bs"
import {TbPlaylist} from "react-icons/tb"
import {MdOutlineLibraryMusic,MdExplore} from "react-icons/md"
import {BiDisc} from "react-icons/bi"
import Myplaylist from './Myplaylist';

const LeftSide = ({setPlaylistId}) => {
  return (
    <div className='left_side_container'>
        <div className='logo_container'>
            <img className='logo' src={LOGO} alt="logo"/>
            Musify
        </div>
         <div className='item'>
           <AiFillHome size={'25'}/>
            Home
          </div>
          <div className='item'>
           <MdExplore size={'25'}/>
            Trends
          </div>
          <div className='item'>
           <BsMusicNoteBeamed size={'25'}/>
            Library
          </div>

          <div className='item-title'>Discover</div>   

                 <div className='item'>
           <AiOutlineCalendar size={'25'}/>
            Discover Weekly
          </div>
          <div className='item'>
           <BiDisc size={'25'}/>
            Made For You
          </div>
          <div className='item'>
           <MdOutlineLibraryMusic size={'25'}/>
            Daily Mix
          </div>  

        <div className='item-title'>Your Collection</div>   

        <div className='item'>
           <AiOutlineHeart size={'25'}/>
            Liked Songs
          </div>
          <div className='item'>
           <BsFillPersonCheckFill size={'25'}/>
            Favoriate Artist
          </div>
          <div className='item'>
           <TbPlaylist size={'25'}/>
            Playlist
          </div>  
          <Myplaylist setPlaylistId={setPlaylistId}/>
    </div>
  )
}

export default LeftSide