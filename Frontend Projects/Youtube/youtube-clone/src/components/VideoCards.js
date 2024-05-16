import React from "react";
import { useParams } from "react-router-dom";

const VideoCards = ({ info }) => {
  const { thumbnails, title, channelTitle } = info.snippet;
  const para = useParams();
  return (
    <div className=" rounded-lg shadow-xl cursor-pointer transition-all duration-200 hover:bg-black overflow-x-hidden ">
      <img className="w-full object-cover" src={thumbnails.medium.url} />
      <div className="p-2">
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export const AddVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCards info={info} />
    </div>
  );
};

export default VideoCards;
