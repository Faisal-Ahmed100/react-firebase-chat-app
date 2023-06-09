import React from "react";
import { Helmet } from "react-helmet";
import { UserAuth } from "../context/authContext";

const Message = ({ message }) => {
  const {currentUser}=UserAuth();
  return (
    <div>
      <Helmet>
        <title>{message.name}</title>
        <link rel="icon" href={message.avater} />
      </Helmet>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" :"chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avater} alt='user avater' />
          </div>
        </div>
        <div className="chat-header">
        
          {message.name}
          <time className="text-xs opacity-50"> {message.createdAt.toLocaleString()}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        
      </div>
      
    </div>
  );
};

export default Message;
