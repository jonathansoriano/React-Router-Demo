import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/UseAuth";


export function LoginPage(){

    const {login} = useAuth();
    const navigate = useNavigate();
    //We get the page location for some reason here
    const location = useLocation();
    //We get the pathname of the location with this and assign it to a var
    //called from. We put this path inside of var use with useNavigate() hook?
    const from = location.state.from.pathname || '/';

    return(
        <section>
            <h2>Login</h2>

            <button onClick={() => {
                login();

                navigate(from);

            }}>
                Sign In
            </button>
        </section>
    );

}