import React, { useEffect } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { togglesuggestions } from '../Utils/ConfigSlice';
import Sidebar from './Sidebar';
import Header from './Header';
import ButtonList from './ButtonList';
import useMostPopularVideos from '../Hooks/useMostPopularVideos';

const Body = () => {
  useMostPopularVideos();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const isHandburgerOpen = useSelector((store) => store.config.isHandburgerOpen);

  useEffect(() => {
    if (location.pathname !== "/") {
      dispatch(togglesuggestions());
    }
  }, [location, dispatch]);

  return (
    <div>
      <Header />
      <div className="flex">
        {isHandburgerOpen && !videoId && <Sidebar />}
        <div>
          <div className="pt-24 ml-[10%]">
            {!videoId && <ButtonList />}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
