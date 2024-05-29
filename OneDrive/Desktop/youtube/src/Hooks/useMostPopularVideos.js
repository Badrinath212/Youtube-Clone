import { useEffect } from 'react'
import { API_KEY, MOST_POPULAR_API } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { AddData } from '../Utils/DataSlice';

const useMostPopularVideos = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const mostPopulardata=async()=>{
        const data=await fetch(MOST_POPULAR_API+API_KEY);
        const json=await data.json();
        dispatch(AddData(json.items));
    }
    mostPopulardata();
  },[])
}

export default useMostPopularVideos;