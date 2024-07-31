import './App.css'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Gallery from './components/Gallery' 
function App() {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Router>
         <div className='main'>
            <Navbar onContactClick= {scrollToContact} className='navv'/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
            </Routes>
            <div ref={contactRef}>
            <Contact/>
            </div>
         </div>
      </Router>
    </>
  )
}

export default App
