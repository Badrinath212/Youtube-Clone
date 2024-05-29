import React from 'react'
import { useEffect } from 'react';
import { API_KEY } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommentsData } from '../Utils/DataSlice';
import Comment from './Comment';

const Comments = ({videoId}) => {
    const dispatch=useDispatch();
    const commentData=useSelector(store=>store.data.commentsData);
    useEffect(()=>{
        const getComments=async ()=>{
            const data= await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+videoId+"&key="+API_KEY);
            const json=await data.json();
            dispatch(AddCommentsData(json.items));
        }
        getComments();
    },[])
  return commentData && (
    <div className='ml-30 mt-16 w-[830px]'>
        {commentData.map((t)=>        
                <Comment key={t.id} channelName={t?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                textDisplay={t?.snippet?.topLevelComment?.snippet?.textDisplay}
                authUrl={t.snippet.topLevelComment.snippet.authorProfileImageUrl}/>)}
    </div>
  )
}

export default Comments;