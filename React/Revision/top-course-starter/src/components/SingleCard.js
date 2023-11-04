import React from 'react'

const SingleCard = ({course}) => {
  return (
    <div>
        <div>
            <img src={course.image.url}/>
            <p>{course.title}</p>
        </div>
    </div>
  )
}

export default SingleCard