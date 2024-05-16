import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentData = [
  {
    name: "Akshaya Saini",
    text: "Great Video ",
    replies: [],
  },
  {
    name: "Akshaya",
    text: "Great Video ",
    replies: [
      {
        name: "Akshaya Saini",
        text: "Great Video ",
        replies: [],
      },
      {
        name: "Akshaya ",
        text: "Great Video ",
        replies: [
          {
            name: "Akshaya Saini",
            text: "Great Video ",
            replies: [
              {
                name: "Akshaya ",
                text: "Great Video ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshaya Saini",
    text: "Great Video ",
    replies: [],
  },
  {
    name: "Akshaya Saini",
    text: "Great Video ",
    replies: [
      {
        name: "Akshaya Saini",
        text: "Great Video ",
        replies: [],
      },
      {
        name: "Akshaya Saini",
        text: "Great Video ",
        replies: [
          {
            name: "Akshaya Saini",
            text: "Great Video ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshaya Saini",
    text: "Great Video ",
    replies: [],
  },
  {
    name: "Akshaya Saini",
    text: "Great Video ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex justify-start  gap-2 mt-3 items-center bg-black rounded-lg px-3 py-1">
      <div>
        <FaUserCircle className="text-4xl" />
      </div>
      <div className="">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) =>{
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-10 border-l mt-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))};

const CommentsContainer = () => {
  return (
    <div className="m-5 py-2 ">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
