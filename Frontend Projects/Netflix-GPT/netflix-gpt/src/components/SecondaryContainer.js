import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(state => state.movies);

  return movies.nowPlayingMovies && (
    <div className='overflow-hidden -mt-48 relative z-30'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        {/* 
            -movie list  popular
                -movie cart
            -movie list Now playing
            - movielist trnding
        */}
    </div>
  )
}

export default SecondaryContainer