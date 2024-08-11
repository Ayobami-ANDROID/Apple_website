import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Feature from './components/Feature'
import HowItWorks from './components/HowItWorks'


function App() {
  

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Feature/>
      <HowItWorks/>
    </main>
  )
}

export default App
