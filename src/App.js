import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import './styles/colors.module.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/Home';
import ServicesPage from './components/Services/Services';
import AboutUsPage from './components/AboutUs/AboutUs';
//import CommunityPage from './components/Community/Community';
import ContactPage from './components/Contact/Contact';

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('light');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage language={language} />} />
          <Route path="/services" element={<ServicesPage language={language} />} />
          <Route path="/about-us" element={<AboutUsPage language={language} />} />
          {/*<Route path="/community" element={<CommunityPage language={language} />} />*/}
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="/employee-access" element={<div><h1>Acceso a Empleados</h1><p>Contenido para empleados aquí.</p></div>} /> {/* Ruta de ejemplo para Acceso Empleados */}
        </Routes>
      </main>

      <Footer language={language} />
    </Router>
  );
}

export default App;