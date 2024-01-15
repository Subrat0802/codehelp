import React from "react";
import Card from "./Card";

const Cards = ({ courseData, category }) => {

  function getAllCourses() {
    if(category === "All"){
        let allCourses = [];
        Object.values(courseData).forEach((array) => {
          array.forEach((data) => {
            allCourses.push(data);
          });
        });
        return allCourses;
    }
    else{
        return courseData[category];
    } 
  }

  return (
    <div className="flex flex-wrap w-full justify-center gap-5">
        {
            getAllCourses().map((course) => {
                return <Card  key={course.id} course={course}/>
            })
        }
    </div>    
  );
};

export default Cards;
