import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveSearchedData } from '../Utils/DataSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const handler=useSelector(store=>store.config.isHandburgerOpen);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const HandleHome=()=>{
    navigate("/");
    dispatch(RemoveSearchedData());
    
  }
  return handler && (
    <div className='fixed mt-10 ml-1'>
        <ul className='shadow-xl  w-[230px] mt-[100px]'>
            <li className='p-2 cursor-pointer' onClick={()=>HandleHome()}>Home</li>
            <li className='p-2'>Shorts</li>
            <li className='p-2'>Subscriptions</li>
            <h1 className='font-bold p-2 my-2'>you</h1>
            <li className='p-2'>Your channel</li>
            <li className='p-2'>History</li>
            <li className='p-2'>Playlists</li>
            <li className='p-2'>Your videos</li>
            <li className='p-2'>Watch later</li>
            <li className='p-2'>Liked videos</li>
            <h1 className='p-2 my-2 font-bold'>Subscriptions</h1>
            <li className='p-2'>Striver</li>
            <li className='p-2'>Akshay saini</li>
            <li className='p-2'>ICC</li>
            <li className='p-2'>BCCI</li>
            <li className='p-2'>IPL20</li>
        </ul>
    </div>
  )
}

export default Sidebar;