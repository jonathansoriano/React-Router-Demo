import { NavLink } from "react-router-dom";
import { campusEvent } from "../data/events";
import { useState } from "react";
export function Events() {
    const [query, setQuery] = useState("");
    const [tag, setTag] = useState(undefined);

    //What the hell is this filter? 
    // Filter events by search query AND tag, independently.
    // First condition: if there's no query, pass everything through;
    // otherwise, only keep events whose name includes the query.
    // Second condition: if there's no tag selected, pass everything through;
    // otherwise, only keep events whose tags include the selected tag.
    const filteredList = campusEvent.filter((event) => (
        (!query || event.name.toLowerCase().includes(query)) && (!tag || event.tags.includes(tag))
    ));

    return (
        <section>
            <h1>Events Page</h1>
            <input type="text" onChange={e => setQuery(e.target.value)} value={query} placeholder="Type a query"/>
            <select value={tag} onChange={e => setTag(e.target.value)}>
                <option value=''>all</option>
                <option value="innovation">innovation</option>
                <option value="showcase">showcase</option>
                <option value="networking">networking</option>
            </select>
            <ul>
                {filteredList.map((e) => (
                <li key={e.id}>
                    {" "}
                    <NavLink to="/event/details">{e.name}</NavLink>
                </li>
                
                ))}
            </ul>
        </section>
    );
}