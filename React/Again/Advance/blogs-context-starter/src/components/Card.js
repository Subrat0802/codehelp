import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      <p>
        By 
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/category/:${post.category.replaceAll(" ", "-")}`} className="underline">{post.category}</NavLink>
      </p>
      <p>Posted On {post.date}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => {
            return <NavLink className="text-blue-900 font-semibold" key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{` #${tag}`}</span>
            </NavLink>
        })}
      </div>
    </div>
  );
};

export default Card;
