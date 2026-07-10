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
import { LoginPage } from './pages/LoginPage.jsx';
import { RequireAuth } from './auth/RequireAuth.jsx';
import { AuthProvider } from './auth/AuthProvider.jsx';

//FILE NAME CHANGE: I needed to change the name of "App.jsx" to "AppLayout.jsx"
//I also needed to change the name I used to import that component from
//import App from './App.jsx' to import AppLayout from './AppLayout.jsx'. 
//Otherwise I would get a Uncaught ReferenceError: AppLayout is not defined



//Here we are creating our route patterns to direct to particular components
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {path: `/`, element: <Home/>},
      {path: `/login`, element: <LoginPage/>},
      {path: `/about`, element: <About/>},
      {path: `/events`, element: <Events/>},
      //1. Changed route from "events/details" to "/events/:id", so anything after events/ will route
      // to the Event details page.
      {path: `/events/:id`, element: <EventDetails/>},
      {
        path: `/settings`,
        element: (
          <RequireAuth>
            <Settings/>
          </RequireAuth>)
      },
      {path: `*`, element: <NotFound/>},
    ]
  },
]);

//"router" being passed to the router property is what we created in line 22,
//where we defined the paths for each page.
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
