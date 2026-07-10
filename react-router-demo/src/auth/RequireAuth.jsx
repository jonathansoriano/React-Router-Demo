import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { Children } from "react";


export function RequireAuth( {children}){
    const { isAuthed } = useAuth();
    //We get the location of where we click originally? 
    //In our case it was from /settings ? We get the location with useLocation() hook
    const location = useLocation();

    if(!isAuthed){
        //Navigate renders nothing in the DOM. 
        // Instead of giving the user something to click, 
        // it immediately redirects the user the moment it mounts
        //NOTE ON USELOCATION(): we pass the location as an object in a property called
        // state.
        return <Navigate to="/login" state={ {from: location} }/>;
    }

    return children;
}