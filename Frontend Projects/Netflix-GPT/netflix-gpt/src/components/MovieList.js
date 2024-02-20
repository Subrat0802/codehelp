import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // console.log(movies);
  return (
    <div className="p-6  text-white">
        <h1 className="text-4xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        
        <div className="flex gap-3">
            {
                movies?.map((poster , index) => {
                    return <MovieCard key={poster.id} posterPath={poster.poster_path}/>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default MovieList;