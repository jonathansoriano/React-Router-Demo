import { useContext } from "react";
import { AuthCtx } from "./AuthContext";

export function useAuth(){
    const authCtx = useContext(AuthCtx);

    if(!authCtx){
        throw new Error('You Should only access this hook from within the AuthProvider!');
    }

    return authCtx;
}