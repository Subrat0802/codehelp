import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setCourses(json.data);
    } catch (error) {
      toast.error("Network error: Api is not fetched");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div className="">
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            catagory={catagory}
            setCatagory={setCatagory}
          />
        </div>
        <div
          className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center
       min-h-[50vh]"
        >
          {loading ? <Spinner /> : <Cards courses={courses} catagory={catagory} />}
        </div>
      </div>
    </div>
  );
};

export default App;
