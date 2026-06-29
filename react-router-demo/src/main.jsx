import { createBrowserRouter, RouterProvider } from  'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './AppLayout.jsx'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Events } from './pages/Events.jsx';
import { EventDetails } from './pages/EventDetails.jsx';
import { Settings } from './pages/Settings.jsx';
import { NotFound } from './pages/NotFound.jsx';

//I needed to change the name of "App.jsx" to "AppLayout.jsx"
//I also needed to change the name I used to import that component from
//import App from './App.jsx' to import AppLayout from './AppLayout.jsx'. 
//Otherwise I would get a Uncaught ReferenceError: AppLayout is not defined
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {path: `/`, element: <Home/>},
      {path: `/about`, element: <About/>},
      {path: `/events`, element: <Events/>},
      {path: `/event/details`, element: <EventDetails/>},
      {path: `/settings`, element: <Settings/>},
      {path: `*`, element: <NotFound/>},
    ]
  },
]);

//"router" being past to the router property is what we created in line 12,
//where we defined the paths for each page.
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
