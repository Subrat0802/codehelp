import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Spinner from "./Spinner";
import { resAPI_URL } from "../utils/constents";
import Carausal from "./Carausal";
import FoodRecommendation from "./FoodRecommendation";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import TopRatedRes from "./TopRatedRes";
import { cararusal_CDN_LINK } from "../utils/constents";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [carausal, setCarausal] = useState([]);
  const [topRatedRes, setTopRatedRes] = useState([]);
  const {locationSideBar} = useContext(UserContext)
  

  const [loading, setLoading] = useState(false);
  const [searchInput, setSerachInput] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(resAPI_URL);
      const json = await data.json();
      setTopRatedRes(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarausal(
        json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setRestaurantData(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredRestaurantData(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchResHandler = () => {
    const searchRest = restaurantData.filter((el) => {
      return el.info.name.toLowerCase().includes(searchInput);
    });
    setFilteredRestaurantData(searchRest);
  };

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
    console.log(containerRef.current);
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
    console.log(containerRef.current);
  };



  //useContext
  // const {loggedInUser, setUserName} = useContext(UserContext);
  return loading ? (
    <Spinner />
  ) : (
    <div className="flex flex-col justify-center items-center w-full bg-[#0F0F0F] text-[#F1F1F1] pt-24 py-10 ">
      {
        locationSideBar && <div  className="fixed w-[25%]  h-[100vh] top-0 left-0 bg-black z-20 mt-24"> hello </div>
      }
      
      <Carausal />
      <FoodRecommendation carausal={carausal} />
      <div className="overflow-x-hidden overflow-y-auto gap-4 w-[80%] mt-10 mb-5 ">
        <div className="w-full flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Top Rated Restaurants</h1>
          <div className="flex gap-4">
            <button
              className="bg-pure-greys-600 rounded-full p-2 cursor-pointer"
              onClick={scrollLeft}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-pure-greys-600 rounded-full p-2 cursor-pointer"
              onClick={scrollRight}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex flex-row gap-5 overflow-x-scroll overflow-y-hidden"
          style={{
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "overflow-y": "hidden",
          }}
        >
          {topRatedRes.map((el, index) => {
            return <TopRatedRes key={index} topRatedRes={el} />;
          })}
        </div>
      </div>

      <div className="w-full p-2 flex justify-center mt-10">
        <input
          className="text-black border border-[#0F0F0F] rounded-s-full w-[40%] p-2 border-none ... "
          placeholder="Search Your Restaurant Hare!"
          value={searchInput}
          onChange={(e) => setSerachInput(e.target.value)}
        />
        <button
          className="border-none ... bg-black text-white p-2 px-4 mr-3 rounded-e-full font-semibold hover:text-[#00C544]"
          onClick={searchResHandler}
        >
          Search
        </button>
        <button
          className="bg-[#00C544] rounded-full p-2 px-4 text-black  font-semibold hover:text-white"
          onClick={() => {
            const topRestaurants = restaurantData.filter((el) => {
              return el.info.avgRating > 4;
            });
            setFilteredRestaurantData(topRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* //Contxt API  */}
        {/* <input  className="text-black" 
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
      </div>

      <div className="w-[80%] ">
        <h1 className="text-3xl font-bold mt-10">
          Restaurants with online food delivery in your area
        </h1>
      </div>

      {/* body res list  */}
      <div className=" mt-4 grid grid-cols-4 gap-4  w-[80%] ">
        {filteredRestaurantData.map((res) => {
          return (
            <Link key={res.info.id} to={"restauratmenu/" + res.info.id}>
              {res.info.veg ? (
                <RestaurantCardPromoted resInfo={res.info} />
              ) : (
                <RestaurantCard resInfo={res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
