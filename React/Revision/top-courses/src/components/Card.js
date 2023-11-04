import React from 'react'

const Card = (props) => {
    let courseData = props.courseData;
  return (
    <div className='w-[200px]'>
        <div>
            <img src={courseData.image.url}/>
        </div>
        <div>
            <p>{courseData.title}</p>
            <p>{courseData.description}</p>
        </div>
    </div>
  )
}

export default Card