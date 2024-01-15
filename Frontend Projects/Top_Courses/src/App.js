import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courseData, setCourseData] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(false);

  console.log(courseData[0]);
  const fetchCourseData = async () => {
    setLoading(true);
    try {
      const data = await fetch(apiUrl);
      const json = await data.json();
      setCourseData(json.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div>
      <div className="bg-red-500 text-center font-bold text-4xl py-2" >
        <div className="text-white">TOP COURSES</div>
      </div>

      <div className="flex gap-3">
        <Filter className="flex gap-4"
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courseData={courseData} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;
