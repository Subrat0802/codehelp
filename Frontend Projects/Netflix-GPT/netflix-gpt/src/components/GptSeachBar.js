import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSeachBar = () => {
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchtext = useRef(null);
  //search movie in tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    // console.log(searchtext.current.value);
    //make an api call to gpt api and get movie results

    const gptQuery =
      "Act as a movie recommendation system suggest some movie for the query" +
      searchtext.current.value +
      ". only give me names of 5 movies, comma seperated like the Example Result given ahead. Example Result: Gadar, Sholay, don, andaaz apna apna, koi mil gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices) {
      return <h1>No data found</h1>
    }

    // console.log(gptResults.choices[0]?.message?.content);
    const gptMovieSuggestions = gptResults.choices[0]?.message?.content.split(",")

    //for each movie i will search TMDB API
    const promiseArray = gptMovieSuggestions.map(movie => searchMovieTMDB(movie))
    const tmdbResults = await Promise.all(promiseArray)
    // console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames: gptMovieSuggestions, movieResults:tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="p-2  w-1/2 bg-gradient-to-r from-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="py-2 px-3 w-[85%] "
          placeholder={lang[language].placeholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-700 py-2 px-4 text-white"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};
export default GptSeachBar;
