import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation  = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header />
        <div>
            <button onClick={() => navigation(-1)}>
                Back
            </button>
            <h2>Blog tagged <span>#{tag}</span></h2>
        </div>
        <Blogs />
        <Pagination />
    </div>
  )
}

export default TagPage