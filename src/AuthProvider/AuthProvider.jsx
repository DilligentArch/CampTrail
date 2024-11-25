import React, { createContext, useState } from 'react';
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createNewUser=(Email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,Email,password);
    };
    const authInfo={
        user,
        setUser,
        loading,
        createNewUser,
    }
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;