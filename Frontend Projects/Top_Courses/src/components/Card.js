import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ course }) => {
  const [button, setButton] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const courseDesc = `${course.description.substring(0, 70)}`;

  return (
    <div className="w-72 rounded-lg pb-5 bg-bgDark text-white ">
      <img className="rounded-t-lg" src={course.image.url} alt={course.image.alt} />
      <div className="p-4">
        <p>{course.title}</p>
        <p>
          {showMore ? course.description : `${course.description.substring(0, 70)}...`}
          <span className="cursor-pointer text-blue-600" onClick={() => setShowMore(!showMore)}>
            {!showMore ? "Show More" : "Show Less"}
          </span>
        </p>
      </div>
      <div className="ml-4" onClick={() => setButton(!button)}>
        {button ? (
          <button
            onClick={() => toast.success("Course Liked")}
            className="bg-blue-600 px-4 rounded-md"
          >
            Like
          </button>
        ) : (
          <button
            onClick={() => toast.warning("Course Unliked")}
            className="bg-bgDark2 px-4 rounded-md mb-4 text-gray-400"
          >
            Liked
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
