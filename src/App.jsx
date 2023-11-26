import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar.jsx"
import Journey from './components/journey/Journey.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="journies">
        <Journey 
          img="./journey1.jpg"
          country="JAPAN"
          place="Mount Fuji"
          startDate="12 Jan, 2021"
          endDate="24 Jan, 2021"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </div>
      <hr></hr>
    </>
  )
}

export default App
