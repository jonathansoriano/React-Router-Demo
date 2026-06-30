import { campusEvent } from "../data/events";
import { Link, useParams } from "react-router-dom";

export function EventDetails() {
    //3. We use the useParams() hook to pull the value that sent us to this component from Events.jsx, which
    //in our case is the event.id, but since it's in the URL now, it is of type string
    const { id } = useParams();
    //4. const {id} is a string so we need to cast/convert our event.id into a string to be able to compare
    const event = campusEvent.find((e) => String(e.id) === id);

    //If event doesn't exist (if event is falsy due to it being null, undefined, etc falsy values...)
    if (!event) {
        return(
            <>
                <p>Event not found.</p>
                <Link to="/events">Click here to return back to the Events</Link>
            </>
        );
    }

    return (
        <div>
            <div>
                <h1>{event.name}</h1>
                <hr />
            </div>

            <div>
                <p>{event.description}</p>
            </div>

            <div>
                <ul>
                    {event.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div>
                <p>{event.date} from {event.time} at {event.location}</p>
            </div>
        </div>
    );
}