import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './components/contexts/theme';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage'
import CardDetails from './Pages/CardDetails/CardDetails'
import Footer from './components/Footer/Footer'
function getInitialTheme() {
  const Theme = localStorage.getItem('theme');
  return Theme ? JSON.parse(Theme) : 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App${theme}`}>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/> 
          <Route path="/CardDetails/:id" element={<CardDetails />} />
        </Routes>
      </Router>
      <Footer/>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;