import { useState,useEffect } from 'react'
// import { Routes,HashRouter as Router,Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import React, { forwardRef, useRef, useLayoutEffect, useImperativeHandle } from 'react';
import gsap from 'gsap';
import { BsMusicNoteBeamed } from 'react-icons/bs';

function App(props) {
  const [token,setToken]=useState("");
  useEffect(()=>{
    setToken(window.localStorage.getItem("token"));
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
     <div className='circle_container' ref={el}>
    <div className='circle' ></div>
      {/* <BsMusicNoteBeamed className='circle' size={'25'}/> */}
    {/* <div className='circle'></div> */}
    {/* <div className='circle'></div> */}
     </div> 
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


  return (
    <div className='app'>
      <Circle ref={circleRef} />
        {!token ?(
         <Login/>
       ):(
        <>
         <Home/>
        </>
      )} 
    </div>
  );
}


export default App
