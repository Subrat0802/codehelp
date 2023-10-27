import React from 'react'
import Card from './Card';

const cards = ({courses}) => {
    let allCourses = [];

    //it returns list of all courses from the api response
    const getCourses = () => {
        console.log("Printing courses");

        Object.values(courses).forEach((courseCatagory) => {
            courseCatagory.forEach((course) => {
                allCourses.push(course)
            })
        })
        return allCourses;
        
    }

  return (
    <div>
        {
        getCourses()?.map((course) => {
            return <Card key={course.id} course={course}/>
        })
        }
    </div>
  )
}

export default cards