import { NavLink } from "react-router-dom";
export function Events() {

    return (
        <>
            <h1>Events Page</h1>
            <p>This the events page of the application</p>
            <ul>
                <li>
                    {" "}
                    <NavLink to="/event/details">Some Event</NavLink>
                </li>
            </ul>
        </>
    );
}