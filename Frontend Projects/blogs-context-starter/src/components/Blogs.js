import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No posts found</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div key={post.id}>
            <p className="font-bold">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span className="underline">{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {
                post.tags.map((tag, index) => {
                  return <span key={index} className="text-blue-900 font-semibold">{`#${tag} `}</span>
                })
              }
            </div>
            
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
