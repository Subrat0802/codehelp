import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-3">
      <FaUserCircle className="text-4xl" />
      <div className="shadow-lg">
        <p className="font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
