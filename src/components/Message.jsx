import React from "react";
import { UserAuth } from "../context/authContext";

const Message = ({ message }) => {
  const {currentUser}=UserAuth();
  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" :"chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avater} alt='user avater' />
          </div>
        </div>
        <div className="chat-header">
        
          {message.name}
          <time className="text-xs opacity-50"> {message.getTime}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        
      </div>
      
    </div>
  );
};

export default Message;
