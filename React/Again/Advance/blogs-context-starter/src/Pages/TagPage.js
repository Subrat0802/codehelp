import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header />
        <div>
            <button onClick={() => navigation(-1)}>back</button>
            <h2>Bolgs Tagged <span>#{tag}</span></h2>
        </div>
        <Blog />
        <Pagination />
    </div>
  )
}

export default TagPage