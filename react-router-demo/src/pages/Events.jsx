import { NavLink, useSearchParams } from "react-router-dom";
import { campusEvent } from "../data/events";

export function Events() {
    // useSearchParams reads/writes the URL's query string (the part after "?").
    // It works like useState, but the "state" lives in the URL itself instead of
    // in memory. That means searches/filters are shareable via link, and survive
    // a page refresh, because the values are literally part of the URL.
    //
    // searchParams: an object (URLSearchParams) you READ from using .get('key')
    // setSearchParams: a function you CALL to UPDATE the URL's query string,
    //   similar to calling a useState setter function
    const [searchParams, setSearchParams] = useSearchParams("");

    // searchParams.get('query') pulls the value of ?query=... out of the URL.
    // If that key isn't in the URL at all, .get() returns null, so we fall back
    // to an empty string with `|| ''` before lowercasing it.
    const query = (searchParams.get(`query`) || '').toLowerCase();

    // Same idea for the ?tag=... param.
    const tag = searchParams.get(`tag`) || '';

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
            {/* setSearchParams({...}) REWRITES the entire URL query string to whatever
                object you pass it. It does NOT merge with existing params automatically -
                that's why we have to manually pass `tag` along here too, even though
                we're only changing `query`. If we left `tag` out, typing in the search
                box would wipe out any tag that was already selected, because the new
                URL would only contain ?query=... and drop ?tag=... entirely. */}
            <input type="text" onChange={e => setSearchParams({query: e.target.value, tag})} value={query} placeholder="Type a query"/>

            {/* Same pattern here: we pass `query` along so changing the tag dropdown
                doesn't erase whatever text is currently in the search box. */}
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