import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit
} from "firebase/firestore";
import { db } from "../firebase.config";
import firebase from 'firebase/app';
import 'firebase/firestore';

const ChatBox = () => {
  const handleRef=useRef()
    const [messages, setMessages] = useState([]);
  
 


  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
      
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id,createdAt: doc.data().createdAt.toDate()});
      });
      setMessages(messages);
      console.log(messages)
    });
    return () => unsubscribe;
  }, []);

  const scrollToBottom=()=>{
    handleRef.current?.scrollIntoView({behavior:'smooth'})
  
  };
  useEffect(scrollToBottom, [messages])
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => {
        return (
          <div key={message.id}>
          <Message  message={message} />
          <div ref={handleRef}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
