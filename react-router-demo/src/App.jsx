import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {

  const [view, setView] = userState("home");

  return (
    <>
      <div>
        <nav>
          <button></button>
          <button></button>
        </nav>

        <div>
          {view === "home"? <Home/> : <About/>}
        </div>

      </div>
    </>
  );

}

export default App
