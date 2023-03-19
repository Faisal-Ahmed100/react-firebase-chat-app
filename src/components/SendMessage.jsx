import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase.config";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const {currentUser}=UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(value.trim() === ""){
      alert("Enter vaild message!")
      setValue("")
      return;
    }
    try {
      const {uid,displayName,photoURL}=currentUser;
      await addDoc(collection(db,'messages'),{
        text:value,
        avater:photoURL,
        name:displayName,
        createdAt:serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error);
    }
    setValue("");
    console.log(value)
  };
  return (
    <div className="fixed w-full bottom-0 py-10 bg-base-200">
      <form onSubmit={handleSubmit} className="containerWrap w-full flex">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full border-gray-700 focus:outline-none rounded-r-none"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          type="submit"
          className="px-5 btn text-sm bg-base-100 rounded-r rounded-l-none outline-none border-none w-auto"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
