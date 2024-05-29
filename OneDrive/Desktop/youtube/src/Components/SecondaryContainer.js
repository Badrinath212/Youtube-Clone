import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer'
import { useLocation, useNavigate } from 'react-router-dom'

const SecondaryContainer = () => {
  const location=useLocation();
  const navigate=useNavigate();
  useEffect(()=>{
    const handlePopState=(event)=>{
      navigate("/home");

    };
    window.addEventListener("popstate",handlePopState,{passive:true});
    return ()=>{
      window.removeEventListener("popstate",handlePopState);
    }
  },[location,navigate]);
  return (
    <div className='-mt-28 ml-[14%]'>
        <VideoContainer/>
    </div>
  )
}

export default SecondaryContainer