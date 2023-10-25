import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catagory, setcatagory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    } catch (err) {
      toast.error("Network Problem");
      // console.log("problem")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className=" ">
        <div>
          <Filter filterData={filterData} catagory={catagory} setcatagory={setcatagory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} catagory={catagory}/>}
        </div>
      </div>
    </div>
  );
};

export default App;
