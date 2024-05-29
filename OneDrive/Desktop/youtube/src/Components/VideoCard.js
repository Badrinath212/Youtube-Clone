import React from 'react'

const VideoCard = ({title,channel,thumbnail,viewcount}) => {
  return (
    <div className='w-[400px] h-[350px] m-2'>
      <img className='w-full h-[250px] rounded-xl'  alt='thumbnail' src={thumbnail.url}/>
      <h1 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h1>
      <p className='font-light'>{channel}</p>
      <p className=' font-light'>{Math.ceil(viewcount/1000)}K views</p>
    </div>
  )
}
export default VideoCard; 