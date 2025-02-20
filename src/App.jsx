import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import CursorTrail from './components/CursorTrail'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <CursorTrail />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
