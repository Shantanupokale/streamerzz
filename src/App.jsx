import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
// import HowitWorks from './components/HowitWorks'
import Keyfeatures from './components/Keyfeatures'
import Pricing from './components/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      {/* <HowitWorks /> */}
      <Keyfeatures />
      <Pricing />
      <Footer />
    </main>

    </>
  )
}

export default App
