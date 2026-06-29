import { createBrowserRouter, RouterProvider } from  'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './AppLayout.jsx'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';

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
    ]
  },
]);

//"router" being past to the router property is what we created in line 12,
//where we defined the paths for each page.
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
