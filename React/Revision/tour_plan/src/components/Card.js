import React from 'react'

const Card = ({id, image, info, price, name, removehandler}) => {
  return (
    <div id="card">
        <img src={image}/>
        <div>
            <h4>{price}</h4>
            <h4>{name}</h4>
        </div>
        <div>
            {info}
        </div>
        <button onClick={() => removehandler(id)}>Remove</button>
    </div>
  )
}

export default Card