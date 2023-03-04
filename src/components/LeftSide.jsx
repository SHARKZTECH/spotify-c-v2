import React, { useState } from 'react'
import LOGO from "../assets/icon1.png";
import {AiFillHome,AiOutlineHeart,AiOutlineCalendar} from "react-icons/ai"
import {BsMusicNoteBeamed,BsFillPersonCheckFill} from "react-icons/bs"
import {TbPlaylist} from "react-icons/tb"
import {MdOutlineLibraryMusic,MdExplore,MdSearch} from "react-icons/md"
import {BiDisc} from "react-icons/bi"
import Myplaylist from './Myplaylist';
import { useSelector, useDispatch } from 'react-redux';

const LeftSide = ({setPlaylistId,setLikedSongs,setSearch,setHome}) => {
  const dispatch=useDispatch();
  const [active,setActive]=useState('loves')

  const handleSearch=()=>{
    setHome(false);
    setLikedSongs(false);
    setSearch(true);
    setActive('search')
  }
  const handleLikedSongs=()=>{
    setHome(false);
    setLikedSongs(true);
    setSearch(false)
    setActive('liked');
  }
  const handlePlayList=()=>{
    setActive("playlists")
  }
  const handleWeeklyDiscover=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setActive('weekly_discover');
    setPlaylistId("37i9dQZEVXcJZyENOWUFo7"); //37i9dQZEVXcLFgyIoBZXFl
  }

  const handleLoves=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setActive("loves");
    setPlaylistId("37i9dQZF1EpswxmXeGFls0");
  }

  const handleTop=()=>{
    dispatch({"type":"GET_PLAYLIST_RESET"});
    setHome(false);
    setLikedSongs(false);
    setSearch(false)
    setActive("top");
    setPlaylistId("37i9dQZF1F0sijgNaJdgit");
  }

  const handleHome=()=>{
    setHome(true);
    setLikedSongs(false);
    setSearch(false)
    setActive("home");
  }
  const handleLib=()=>{
    setHome(true);
    setLikedSongs(false);
    setSearch(false)
    setActive("lib");
  }
  
  
  return (
    <div className='left_side_container'>
        <div className='logo_container'>
            <img className='logo' src={LOGO} alt="logo"/>
            Musify
        </div>
         <div className={active=='home' ? 'item active' : 'item'} onClick={handleHome}>
           <AiFillHome size={'25'}/>
            Home
          </div>
          <div className='item' style={{display:"none"}}>
           <MdExplore size={'25'}/>
            Trends
          </div>
          <div className={active=='lib' ? 'item active' : 'item'} onClick={handleLib}>
           <BsMusicNoteBeamed size={'25'}/>
            Library
          </div>
          <div className={active=='search' ? 'item active' : 'item'} onClick={handleSearch}>
           <MdSearch size={'25'}/>
            Search Track
          </div>

          <div className='item-title'>Discover</div>   

          <div className={active=='weekly_discover' ? 'item active' : 'item'} onClick={handleWeeklyDiscover}>
           <AiOutlineCalendar size={'25'}/>
            Discover Weekly
          </div>
          <div className={active=='loves' ? 'item active' : 'item'} onClick={handleLoves}>
           <BiDisc size={'25'}/>
            Songs You Love
          </div>
          <div className={active=='top' ? 'item active' : 'item'} onClick={handleTop}>
           <MdOutlineLibraryMusic size={'25'} />
            Top Songs
          </div>  

        <div className='item-title'>Your Collection</div>   

        <div className={active=='liked' ? 'item active' : 'item'} onClick={handleLikedSongs}>
           <AiOutlineHeart size={'25'} />
            Liked Songs
          </div>
          <div className='item'  style={{display:"none"}}>
           <BsFillPersonCheckFill size={'25'} />
            Favoriate Artist
          </div>
          <div className={active=='playlists' ? 'item active' : 'item'} onClick={handlePlayList}>
           <TbPlaylist size={'25'}/>
            Playlist
          </div>  
          <Myplaylist setPlaylistId={setPlaylistId} setLikedSongs={setLikedSongs} active={active} setSearch={setSearch} setHome={setHome}/>
    </div>
  )
}

export default LeftSide