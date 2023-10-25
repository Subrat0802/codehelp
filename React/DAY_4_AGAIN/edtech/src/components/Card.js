import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //pehle se like nahi hai
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Liked removed");
    }
    else{
      //pehle se liked nahi hai
      //insert karna hai liked courses mai
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        ///non empty pehle se
        setLikedCourses((prev) => [...prev, course.id])
      }
      toast.success("Liked Successfull!")
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md ">
      <div className=" relative">
        <img className="rounded-md" src={course.image.url} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-4 grid place-items-center">
          <button onClick={clickHandler}>
            {!likedCourses.includes(course.id) ? <FcLikePlaceholder fontSize="1.7rem" /> : 
              <FcLike fontSize="1.7rem" /> }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2 ">{
          course.description.length >100 ? 
          (course.description.substr(0,100)) + "..." :
          (course.description)
        }</p>
      </div>
    </div>
  );
};

export default Card;
