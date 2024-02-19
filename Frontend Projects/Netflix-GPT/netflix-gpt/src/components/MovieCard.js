import React from 'react'
import { IMAGE_CDN_POSTER } from '../utils/constants'

const MovieCard = ({posterPath }) => {
    console.log(posterPath);
  return (
    <div className='w-48'>
        <img src={IMAGE_CDN_POSTER + posterPath } alt='poster_image'/>
    </div>
  )
}

export default MovieCard