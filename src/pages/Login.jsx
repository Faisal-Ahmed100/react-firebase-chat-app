import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { SignInWithGoogle, currentUser } = UserAuth();
  const handleSignIn = async () => {
    try {
      await SignInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [navigate,currentUser]);
  return (
    <>
    <Helmet>
      <title>Login page</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to chat</h1>
          <p className="py-6">
            Join the conversation, meet now people, and make cunnections in one
            shared room.
          </p>
          <button className="btn bg-base-100" onClick={handleSignIn}>
            Login with google
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Login;
