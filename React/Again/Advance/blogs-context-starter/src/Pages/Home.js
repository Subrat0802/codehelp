import React from 'react'
import Pagination from "../components/Pagination";
import Blog from "../components/Blog";
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <Blog />
      </div>
      <div className=" ">
        <Pagination />
      </div>
    </div>
  )
}

export default Home