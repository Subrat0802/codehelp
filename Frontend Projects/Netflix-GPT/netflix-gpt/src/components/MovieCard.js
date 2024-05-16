import React from 'react'
import { IMAGE_CDN_POSTER } from '../utils/constants'
const MovieCard = ({posterPath }) => {
  if(!posterPath) return
  return (
    <div className='w-56'>
        <img src={IMAGE_CDN_POSTER + posterPath } alt='poster_image'/>
    </div>
  )
}

export default MovieCard