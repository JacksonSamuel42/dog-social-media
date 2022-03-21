import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

const ProtectedRoute = ({children}) => {
	const {login} = React.useContext(UserContext);
	if(!login){
        return <Navigate to="/login" replace/>
    }else{
        return children
    }
};

export default ProtectedRoute;
