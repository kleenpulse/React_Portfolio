import React, { useState, useEffect } from 'react'
import { CiLight } from "react-icons/ci";
import { BsMoonFill } from "react-icons/bs";
import { About, Footer, Header, Work, Skills, Testimonials } from './containers'
import { Navbar } from './components'
import { ThemeContext } from "./ThemeContext"
import './App.scss'


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  useEffect(() => {
    let checkTheme = localStorage.getItem('theme');
    if (checkTheme === 'dark') {
      setIsDarkTheme(true)
    }
    document.body.className = checkTheme
  }, [])
  const handleClick = () => {
    setIsDarkTheme(prev => !prev)
  }
  const isTheme = isDarkTheme ? 'dark' : 'light'


  useEffect(() => {
    localStorage.setItem('theme', isTheme);
    document.body.className = isTheme
  }, [isTheme])


  return (
    <ThemeContext.Provider value={{ isDarkTheme }}>



      <div className={`app ${isTheme}`}>
        <div className="themer">
          <div className="switch">
            <div
              className={`indicator ${isDarkTheme ? "right" : ""}`}
              onClick={handleClick}
            >
              {isDarkTheme ? <BsMoonFill /> : <CiLight />}
            </div>
          </div>
        </div>

        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div >
    </ThemeContext.Provider>

  )
}

export default App