import { useState,useEffect } from 'react'
// import { Routes,HashRouter as Router,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import React, { forwardRef, useRef, useLayoutEffect, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDispatch } from 'react-redux';

function App(props) {
  const [token,setToken]=useState("");
  const dispatch=useDispatch();

  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
  },[])

  let spotify=new SpotifyWebApi();
  useEffect(()=>{ 
      spotify.setAccessToken(window.localStorage.getItem("token"));   

      spotify.getMe().then(data=>{
          dispatch({"type":"GET_USER_SUCCESS","payload":data})
          // console.log(data)
      }).catch(error=>{
        console.log(error)
      })

  
  },[])

  const Circle = forwardRef((props, ref) => {
    const el = useRef();
    useImperativeHandle(
      ref,
      () => {
        // return our API
        return {
          moveTo(x, y) {
            gsap.to(el.current, { x, y });
          },
        };
      },
      []
    );
    return (
    <div className='circle' ref={el}></div> 
    );
  });
  const circleRef = useRef();
  useLayoutEffect(() => {
    // Add mousemove event listener
    const handleMouseMove = (event) => {
      circleRef.current.moveTo(event.clientX, event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


      //  <div className='circle_container' ref={el}>
      // <div className='circle' ref={el}></div>
      {/* <BsMusicNoteBeamed className='circle' size={'25'}/> */}
    {/* <div className='circle'></div> */}
    {/* <div className='circle'></div> */}
    //  </div> 


  return (
    <div className='app'>
      {/* <Circle ref={circleRef} /> */}
        {!token ?(
         <Login/>
       ):(
        <>
         <Home spotify={spotify}/>
        </>
      )} 
    </div>
  );
}


export default App
