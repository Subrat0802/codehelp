import React from 'react'
import Card from './Card'

const Tours = ({toursData, removehandler }) => {
    
  return (
    <div>
        {toursData.map((tour) => (
                <Card key={tour.id} {...tour} removehandler={removehandler}/>
            ))}
        
    </div>
  )
}

export default Tours