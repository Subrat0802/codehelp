import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='overflow-x-hidden bg-black'>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        main container
          - video bg
          - video title
        secondary container
          -movieList >< n 
            -cards >< n

        
      */}
      
    </div>
  )
}

export default Browse