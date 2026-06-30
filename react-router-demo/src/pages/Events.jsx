import { NavLink, useSearchParams } from "react-router-dom";
import { campusEvent } from "../data/events";

export function Events() {
    //useSearchParams hook  from react-router-dom
    const [searchParams, setSearchParams] = useSearchParams("");
    const query = (searchParams.get(`query`) || '').toLowerCase();
    const tag = searchParams.get(`tag`)|| '';

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
            <input type="text" onChange={e => setSearchParams({query: e.target.value, tag})} value={query} placeholder="Type a query"/>
            <select value={tag} onChange={e => setSearchParams({tag: e.target.value, query})}>
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