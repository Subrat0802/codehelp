import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';



const Blogs = () => {
  //data conusme
  const {posts, loading} = useContext(AppContext);
  console.log("printing inside blog compo")
  console.log(posts)

  return (
    <div className='w-11/12 max-w-[600px] mt-20 mb-20 flex flex-col justify-center items-center '>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ?
          (<div>
            <p>No Post Found</p>
          </div>) : 
          (posts.map((post) => (
            <div className='mb-9' key={post.id}>
              <p className='font-bold '>{post.title}</p>
              <p className='italic'>
                By <span>{post.author}</span> on <span className='not-italic text-bold underline'>{post.category}</span>
              </p>
              <p className='text-blue-600 text-[10px]'>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag, index) => {
                  return <span className='text-blue-800  cursor-pointer text-sm' key={index}>{`#${tag}`} {" "}</span>
                })}
              </div>
            </div>
          ))) 
        )
      }
    </div>
  )
}

export default Blogs