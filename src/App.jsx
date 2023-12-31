import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar.jsx"
import Journey from './components/journey/Journey.jsx'
import data from './data.js'

let num = 0;

function App() {

  const journies = data.map(journey => 
    <>
      <Journey
        key={num++} 
        {...journey}
      />
      {journey != data[data.length - 1] ? <hr></hr> : <div className="faded"></div>}
    </>
    );

  return (
    <>
      <Navbar />
      <div className="journies">
        {journies}
      </div>
    </>
  )
}

export default App
