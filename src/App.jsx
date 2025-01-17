import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SERVICE from './components/SERVICE/SERVICE'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
<Navbar/>
<Hero/>
<About/>
<SERVICE/>
<MyWork/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App