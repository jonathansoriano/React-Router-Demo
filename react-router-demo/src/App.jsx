import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {

  const [view, setView] = useState("home");

  return (
    <>
      <div>
        <nav>
          <button onClick={()=> setView("home")}>Home</button>
          <button onClick={()=> setView("about")}>About</button>
        </nav>

        <div>
          {view === "home" && <Home/>}
          {view === "about" && <About/>}
        </div>

      </div>
    </>
  );

}

export default App
