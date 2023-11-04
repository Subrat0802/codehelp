import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let catagory = props.catagory;
    function getCoursesData(){
        if(catagory === "All"){
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[catagory]
        }
        
    
    }
  return (
    <div className='flex flex-wrap'>
        {
            getCoursesData().map((el) => {
                return <Card key={el.id} courseData={el}/>
            })
        }
    </div>
  )
}

export default Cards
