import React from 'react'

const AddCourse = () => {
  return (
    <div>
        <div>
            <h1>Add Course</h1>
            <div>
                <RenderSteps />
            </div>
        </div>
        <div>
            <p>Code Upload Tips</p>
            <ul>
                <li>Set the course price option or make it free.</li>
                <li>Standard size for the course thumbnail is 1024x576.</li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default AddCourse