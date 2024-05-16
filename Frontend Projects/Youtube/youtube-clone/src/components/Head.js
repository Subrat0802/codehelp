import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_IMG, YOUTUBE_SEARCH_API } from "../utils/constants";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { PiBellSimpleThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState([]);
  const [showQuery, setShowQuery] = useState(false);

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      getSearchSuggetion();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setQuery(json[1]);
  };


  return (
    <div className="flex justify-between items-center shadow-lg fixed top-0 w-full bg-[#121212]">
      <div className="flex text-gray-200 justify-center items-center gap-5 p-5 text-xl">
        <RxHamburgerMenu
          className="cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img width={100} src={LOGO_IMG} />
        </a>
      </div>
      <div className="w-2/4  ">
        <div className="w-full flex justify-center items-center ">
          <input
            className="bg-[#121212] border border-[#222222] rounded-l-full w-[86%] py-2 px-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowQuery(true)}
            onBlur={() => setShowQuery(false)}
          />
          <button className=" border border-[#222222] bg-[#222222] text-2xl rounded-r-full  py-2 px-5">
            <CiSearch />
          </button>
          <button className=" border border-[#222222] bg-[#222222] text-2xl rounded-full ml-2  py-2 px-2">
            <MdKeyboardVoice />
          </button>
        </div>

        {
            showQuery && <div className="fixed bg-[#121212] mt-1 py-2 px-5 w-[47%] rounded-lg">
            <ul>
                {   
                    query.map((el,index) => {
                        return <li key={index} className="flex hover:bg-black items-center justify-start px-1 py-2"><CiSearch className="text-2xl mr-2"/> {el}</li>
                    })
                }
            </ul>
        </div>
        }
        
      </div>
      <div className="flex gap-3 text-2xl p-4 text-gray-200">
        <PiVideoCameraThin />
        <PiBellSimpleThin />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Head;
