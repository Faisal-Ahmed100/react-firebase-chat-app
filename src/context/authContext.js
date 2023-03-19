import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading,setLoading]=useState(true);


  // sign in with google
  const SignInWithGoogle=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
  };
  // signout
  const SignOut=()=>signOut(auth);

useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,(user)=>{
  setCurrentUser(user);
  setLoading(false);
})
return unSubscribe;
},[]);

  const values = {
    currentUser,
    setCurrentUser,
    SignInWithGoogle,
    SignOut
  };
  return <AuthContext.Provider value={values}>{!loading && children}</AuthContext.Provider>;
};


export const UserAuth = () => {
  return useContext(AuthContext);
};
