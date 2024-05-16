import React, { useContext, useEffect, useState } from "react";
import RestaurantsCard, { withPromotedLabel } from "./RestaurantsCard";
import { resObje } from "../utils/mockData";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRes, setFilteredRes] = useState(null);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantsCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2438775&lng=77.4346625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );

      setFilteredRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.log("Error whle fething the data", error);
    }
  };

  const topRatedRes = () => {
    const topRes = filteredRes.filter((el) => {
      return el.info.avgRating > 4;
    });
    setFilteredRes(topRes);
  };

  const handleSearchRes = () => {
    console.log("Man");
    const newSearchRes = restaurants.filter((el) => {
      return el.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRes(newSearchRes);
  };

  const { setUserInfo, loggedInUser } = useContext(UserContext);

  return (
    <div className="body">
      <div className="search mb-6 px-8">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border mr-1 border-black rounded-lg"
        />
        <button
          onClick={handleSearchRes}
          className="bg-black text-white px-4 rounded-lg mr-3"
        >
          Search
        </button>
        <button
          onClick={topRatedRes}
          className="bg-green-800 text-white rounded-lg px-3 "
        >
          Top Rated Restaurants
        </button>

        <label>
          User Name{" "}
          <input
            className="border"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </label>
      </div>
      <div className="res-container flex flex-wrap gap-5 justify-center ">
        {restaurants === null ? (
          <h1>Loading...</h1>
        ) : (
          filteredRes.map((res) => {
            return (
              <Link to={`/restMenu/${res.info.id}`} key={res.info.id}>
                {res.info.promoted ? (
                  <RestaurantCardPromoted resData={res} />
                ) : (
                  <RestaurantsCard resData={res} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
