import React from 'react'
import { DISLIKE_ICON, LIKE_ICON, USER_ICON } from '../Utils/constants';

const Comment = ({channelName,textDisplay,authUrl}) => {
  return (
    <div className='flex'>
        <img  className='rounded-full h-16' alt='user' src={authUrl ? authUrl : USER_ICON}/>
        <div className='ml-2'>
            <p><strong>{channelName}</strong></p>
            <h1>{textDisplay}</h1>
            <div className=''>
                <p className='flex'>
                    <img className='w-12' alt='like' src={LIKE_ICON}/>
                    <span className='mt-3'>0</span>
                    <span className='mt-3 ml-3'>0</span>
                    <img className='w-12' alt='dislike' src={DISLIKE_ICON}/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comment;