import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import chatSlice, { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { randomMessageGenerator } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessageGenerator()+"🚀",
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    
    <div className=" ml-2 w-full h-[600px] p-2 border overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((msg, index) => (
        <ChatMessage key={index} name={msg.name} message={msg.message} />
      ))}
    </div>

    <form onSubmit={(e) => {
        e.preventDefault()
        console.log(liveMessage)
        dispatch(addMessage({name:"Subrat", message:liveMessage}))
    }}>
        <input className="w-96" placeholder="Message" type="text" onChange={(e) => setLiveMessage(e.target.value)}/>
        <button className="bg-blue-500 ">Send</button>
    </form>

    </>
  );
};

export default LiveChat;
