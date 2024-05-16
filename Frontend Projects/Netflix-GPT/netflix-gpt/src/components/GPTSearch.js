import React from "react";
import GptSearchBar from "./GptSeachBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL}/>
      </div>

      {/* //search bar  */}
      <GptSearchBar />

      {/* gpt movie suggetions */}
      <GptMovieSuggetion />
    </div>
  );
};

export default GPTSearch;
