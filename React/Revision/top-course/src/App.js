import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title); //default value All stpe-1 catagory

  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output);

    }
    catch(err){
      toast.error("Data not found");
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
      <div>
        <Filter 
          catagory={catagory} //step -2 catagory 
          setCatagory={setCatagory} //step -3 yaha se filter file m
          filterData={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses.data} 
          catagory={catagory} //step 6
          />)
        }
      </div>
    </div>
  );
};

export default App;
