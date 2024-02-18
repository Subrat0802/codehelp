import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Pagination from './components/Pagination'
import "./App.css"
import Blogs from './components/Blogs'
import { AppContext } from './context/appContext'

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[])
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination /> 
    </div>
  )
}

export default App