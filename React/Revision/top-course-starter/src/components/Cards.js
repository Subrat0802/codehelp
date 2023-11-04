import React from 'react'
import SingleCard from './SingleCard'


const Cards = ({courseData}) => {

    let allCourses = [];
    const getCourses = () => {
        Object.values(courseData).forEach((courseCat) => {
            courseCat.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
  return (
    <div>
        {
            getCourses()?.map((co) => {
                return <SingleCard key={co.id} course={co}/>
            })
        }
    </div>
  )
}

export default Cards