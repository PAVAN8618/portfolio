import React from 'react'
import Portfolio from './components/portfolio/Portfolio'
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Topbar from './components/topbar/Topbar'
import './app.scss'


function App() {
  return (
    <div className='app'>
      <Topbar/>
      <div className='sections'>
    <Portfolio/>
    <Works/>
    <Intro/>  
    <Testimonials/>
    <Contact/>
    </div>
      </div>
  )
}

export default App