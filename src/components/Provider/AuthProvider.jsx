import React, { createContext, useState } from 'react';

export const AuthContex = createContext(null)
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null)

    const creatUser = (email , password)=>{
       return createUserWithEmailAndPassword(auth, email , password)
    }



    const authInfo = {
        user,
        creatUser
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;