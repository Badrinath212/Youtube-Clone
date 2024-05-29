import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchCard = ({info}) => {
  const navigate=useNavigate();
  const HandleNavigate=()=>{
    navigate("/watch?v="+info?.id?.videoId);
  }
  return (
    <div className='flex h-[320px] my-3' onClick={()=>HandleNavigate()}>
        <div className='p-2 w-[720px] h-[320px]'>
            <img alt='thumbnail' className='w-full h-full rounded-xl' src={info?.snippet?.thumbnails?.high?.url}/>
        </div>
        <div className='pl-1 pt-1 py-2'>
            <h1 className='font-bold text-xl p-2'>{info?.snippet?.title}</h1>
            <p className='p-2'>{info?.snippet?.channelTitle}</p>
            <p className='p-2'>{info?.snippet?.description}</p>
        </div>
</div>
  )
}

export default SearchCard;