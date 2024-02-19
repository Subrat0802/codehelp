import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerId = useSelector((state) => state.movies?.trailerVideo);
  return (
    <div className="w-screen">
      <iframe className=" w-screen h-[100vh] aspect-video "
        width="800"
        height="600"
        src={"https://www.youtube.com/embed/"+trailerId + "?&autoplay=1&mute=1&showinfo=0&controls=0&autohide=1&amp;loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
      
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
