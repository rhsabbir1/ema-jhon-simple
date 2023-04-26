import React, { createContext, useEffect, useState } from 'react';

export const AuthContex = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null)
    const [loading , setLoading] = useState(true)

    const creatUser = (email , password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email , password)
    }

    const logIn = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(()=>{
        const unsbscribe =onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsbscribe()
        }
    },[])

    const logOut = ()=>{
        signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        creatUser,
        logIn,
        logOut
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;