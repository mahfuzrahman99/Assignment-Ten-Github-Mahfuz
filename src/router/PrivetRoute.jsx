

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-center"><span className="text-9xl loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate state={location.pathname} to={`/login`}/>
};

export default PrivetRout;