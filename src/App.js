import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import './App.css';
import './styles/colors.module.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/Home';
import ServicesPage from './components/Services/Services';
import AboutUsPage from './components/AboutUs/AboutUs';
import ContactPage from './components/Contact/Contact';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';

import ScrollToTop from './components/ScrollToTop'; // <--- NUEVO: Importa ScrollToTop

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('light');
  // NUEVO: Estado para controlar si la animación de intro está activa
  const [isIntroAnimationActive, setIsIntroAnimationActive] = useState(true);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Función para manejar la finalización de la animación de introducción
  const handleIntroAnimationComplete = (completed) => {
    setIsIntroAnimationActive(!completed); // Establece a false cuando la animación termina
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lev8X8rAAAAAJzvUUQssasVnbKGm1dtxgxI10L1">
      <Router basename='/app'>
        {/* NUEVO: Renderiza el componente ScrollToTop aquí */}
        <ScrollToTop />

        {/* Pasar isIntroAnimationActive a Navbar */}
        <Navbar
          language={language}
          toggleLanguage={toggleLanguage}
          theme={theme}
          toggleTheme={toggleTheme}
          isIntroAnimationActive={isIntroAnimationActive}
        />

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={<HomePage language={language} theme={theme} onIntroAnimationComplete={handleIntroAnimationComplete} />}
            />
            <Route path="/services" element={<ServicesPage language={language} />} />
            <Route path="/about-us" element={<AboutUsPage language={language} />} />
            <Route path="/contact" element={<ContactPage language={language} />} />
            <Route
              path="/employee-login"
              element={<EmployeeLogin language={language} theme={theme} />}
            />
          </Routes>
        </main>

        <Footer language={language} />
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;