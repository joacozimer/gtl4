import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'; // Importa el proveedor

import './App.css';
import './styles/colors.module.css'; // Ensure this file also has your dark mode variables
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/Home';
import ServicesPage from './components/Services/Services';
import AboutUsPage from './components/AboutUs/AboutUs';
//import CommunityPage from './components/Community/Community';
import ContactPage from './components/Contact/Contact';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin'; // CAMBIO: Importar EmployeeLogin

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
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);
  

  return (
    // Envuelve toda la aplicación con GoogleReCaptchaProvider
    // Reemplaza "TU_CLAVE_DE_SITIO_RECAPTCHA_AQUI" con tu clave de sitio (pública)
    <GoogleReCaptchaProvider reCaptchaKey="6Lev8X8rAAAAAJzvUUQssasVnbKGm1dtxgxI10L1">
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
            {/* CAMBIO: Renderizar EmployeeLogin y pasar las props language Y theme */}
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