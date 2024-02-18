import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;



  //like unlike function
  const clickHandler = () => {
    //logic
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pada tha
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      //pehel se like nahi hai ye course
      //insert karana h ye course liked course mai
      if (likedCourses.length === 0) {
        setLikedCourses(course.id);
      } else {
        //non empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully"); 
    }
  };

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 min-h-[45vh]">
      <div className="relative ">
        <img src={course.image.url} />
        <div className="w-[40px] h-[40px] grid place-items-center 
              bg-white rounded-full absolute right-2 bottom-[-17px] ">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {
            course.description.length > 100 ? 
              (course.description.substring(0,100)+"...") : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
