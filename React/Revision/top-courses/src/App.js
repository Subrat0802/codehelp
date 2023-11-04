import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";


const App = () => {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);
  
  async function fetchdata(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let data = await res.json();
      setCourses(data.data);
      // console.log(data.data)
      
    }
    catch(error){
      console.log("error");
    }
    
    setLoading(false)
  }

  useEffect(() => {
    fetchdata()
  },[])



  return (
  <div>
    <Navbar />
    <Filter filterData={filterData} setCatagory={setCatagory} catagory={catagory}/>
    <div>
      {
        loading ? (<Spinner />) : (<Cards courses={courses} catagory={catagory}/>)
      }
    </div>
  </div>
  );
};

export default App;
