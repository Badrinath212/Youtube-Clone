import React, { useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setButtonOpen } from '../Utils/ConfigSlice';
import Comments from './Comments';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePopState = (event) => {
      navigate("/home");
      dispatch(setButtonOpen());
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location, navigate, dispatch]);

  const videoId = searchParams.get("v");

  return (
    <div className='ml-40'>
      {videoId && (
        <iframe
          width="830"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <div>
        <Comments videoId={videoId} />
      </div>
    </div>
  );
};

export default Watch;
