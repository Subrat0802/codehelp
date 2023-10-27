import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState("")

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong")
      }
    }
    fetchdata();
  },[])

  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <Filter filterData={filterData}/>
    <Cards courses={courses}/>
  </div>
  );
};

export default App;
