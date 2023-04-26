import React, { createContext, useEffect, useState } from 'react';

export const AuthContex = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null)

    const creatUser = (email , password)=>{
       return createUserWithEmailAndPassword(auth, email , password)
    }

    const logIn = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(()=>{
        const unsbscribe =onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
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