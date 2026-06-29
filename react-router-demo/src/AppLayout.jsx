import './AppLayout.css'
import { NavLink, Outlet } from 'react-router-dom';

//When renaming file name from App.jsx to AppLayout.jsx
//You need to change the name of the component
function AppLayout() {

  return (
    <>
      <div>
        <nav>
          {/* Replaced out Buttons with NavLink tags to navigate our Pages*/}
          {/* NavLink and Link are Declaritive way to creating our routes in our App*/}
          <NavLink to="/">Home</NavLink>
          {` | `}
          <NavLink to="/about">About</NavLink>
          {` | `}
          <NavLink to="/events">Events</NavLink>
          {` | `}
          <NavLink to="/settings">Settings</NavLink>
        </nav>

        <div>
          {/* Whatever the router renders, it's going to be displayed here*/}
          <Outlet/>
        </div>

      </div>
    </>
  );

}
//And change the name you're exporting here...
export default AppLayout
