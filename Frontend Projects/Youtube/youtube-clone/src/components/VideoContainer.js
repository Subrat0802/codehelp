import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCards, {AddVideoCard} from "./VideoCards";
import { useDispatch, useSelector } from "react-redux";
import { addFetchedData } from "../utils/dataSlice";
import { Link, NavLink } from "react-router-dom";


const VideoContainer = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.data.homePageData);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    dispatch(addFetchedData(json.items));
  };

  return videos.length === 0 ? (
    <h1>Loading..</h1>
    
  ) : (
    <div className=" flex flex-wrap  mt-5 gap-3 justify-center ">
      {videos.length === 0 ? <h1>Loading..</h1> : <AddVideoCard info={videos[0]}/>}
      {videos.map((el) => {
        return <NavLink key={el.id} className=" w-[31%] gap-3 " to={"/watch?v="+el.id}><VideoCards  info={el} /></NavLink> ;
      })}
    </div>
  );
};

export default VideoContainer;
// flex justify-center flex-wrap mt-4 gap-5 overflow-x-hidden w-[100%] 