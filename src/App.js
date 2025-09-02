import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import './App.css';
import './styles/colors.module.css';

import HomePage from './components/Home/Home';
import ServicesPage from './components/Services/Services';
import AboutUsPage from './components/AboutUs/AboutUs';
import ContactPage from './components/Contact/Contact';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';
import Ticketera from './components/Ticketera/Ticketera';
import EditarPerfil from './components/EmployeeLogin/EditarPerfil';
import Chat from './components/Chat/Chat';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './MainLayout';

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('light');
  const [isIntroAnimationActive, setIsIntroAnimationActive] = useState(true);

  const toggleLanguage = (langCode) => {
    setLanguage(langCode);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleIntroAnimationComplete = (completed) => {
    setIsIntroAnimationActive(!completed);
  };

  // Verifica si la URL actual es un subdominio.
  const isSubdomain = window.location.hostname.split('.').length > 2;

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lev8X8rAAAAAJzvUUQssasVnbKGm1dtxgxI10L1">
      <Router basename='/'>
        <ScrollToTop />

        <MainLayout
          language={language}
          toggleLanguage={toggleLanguage}
          theme={theme}
          toggleTheme={toggleTheme}
          isIntroAnimationActive={isIntroAnimationActive}
        >
          <Routes>
            {/* Solo redirige a /home si no es un subdominio. */}
            {!isSubdomain && <Route path="/" element={<Navigate to="/home" replace />} />}

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
            <Route
              path="/employee-access-dashboard"
              element={<Ticketera language={language} theme={theme} />}
            />
            <Route
              path="/employee-access-dashboard/edit-profile"
              element={<EditarPerfil language={language} theme={theme} />}
            />
            {/* Solo redirige a /home si no es un subdominio. */}
            {!isSubdomain && <Route path="*" element={<Navigate to="/home" replace />} />}
            <Route path="/chat" element={<Chat theme={theme} />} />
          </Routes>
        </MainLayout>
      </Router>
    </GoogleReCaptchaProvider>
  );
}

export default App;