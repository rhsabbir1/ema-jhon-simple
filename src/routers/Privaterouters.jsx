import React, { useContext } from 'react';
import { AuthContex } from '../components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privaterouters = ({children}) => {
    const {user , loading } = useContext(AuthContex)

    if(loading){
        return <div className='loading'>Loading...</div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate> ;
};

export default Privaterouters;