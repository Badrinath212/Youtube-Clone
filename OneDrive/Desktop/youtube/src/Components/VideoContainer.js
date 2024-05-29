import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const data=useSelector(store=>store.data.mostpopulardata);
  return data && (
    <div className='flex flex-wrap mt-[110px]'>
      {data.map((video=>{
        return (
        <Link to={"/watch?v="+video.id} key={video.id}>
          <VideoCard title={video.snippet.title} 
        channel={video.snippet.channelTitle} 
        thumbnail={video.snippet.thumbnails.medium}
        viewcount={video?.statistics?.viewCount}/>
        </Link>)
}))}
    </div>
  )
}

export default VideoContainer;