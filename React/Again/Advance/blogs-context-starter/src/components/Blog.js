import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blog = () => {
  //conume
  const { loading, posts } = useContext(AppContext);

  return (
    <div className=" w-[60%] flex flex-col justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Blog;
