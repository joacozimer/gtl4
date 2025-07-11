import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import logoLight from '../../assets/images/GreenLimeWhiteBackground.jpg';
import logoDark from '../../assets/images/GreenLimeGreyBackground.jpg';
// Importar textos para localización
import texts from '../../data/texts';

import './EmployeeLogin.css';

// Aceptar 'language' Y 'theme' como props desde App.js
const EmployeeLogin = ({ language, theme }) => { // CAMBIO: Recibir 'theme' como prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // REMOVIDO: const [theme, setTheme] = useState('light'); // Ya no es necesario el estado local de tema
    const [logoAnimated, setLogoAnimated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // REMOVIDO: No es necesario detectar el tema del body aquí, ya lo recibimos como prop
        // const currentTheme = document.body.className.includes('dark') ? 'dark' : 'light';
        // setTheme(currentTheme);

        // Activa la animación del logo después de un breve retraso
        const timer = setTimeout(() => {
            setLogoAnimated(true);
        }, 500); // Retraso de 0.5 segundos

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, []); // Se ejecuta solo una vez al montar el componente

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.endsWith('@greenlimetech.com')) {
            await Swal.fire({
                icon: 'error',
                // Usar textos localizados para SweetAlerts
                title: texts.employeeLogin.domainErrorTitle[language],
                text: texts.employeeLogin.domainErrorMessage[language],
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            return;
        }

        if (password === 'miContrasenaSegura123' && email.endsWith('@greenlimetech.com')) {
            await Swal.fire({
                icon: 'success',
                // Usar textos localizados para SweetAlerts
                title: texts.employeeLogin.loginSuccessTitle[language],
                text: texts.employeeLogin.loginSuccessMessage[language],
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            console.log('Inicio de sesión exitoso para:', email);
            navigate('/employee-access-dashboard'); // Redirige a una nueva ruta después del éxito
        } else {
            await Swal.fire({
                icon: 'error',
                // Usar textos localizados para SweetAlerts
                title: texts.employeeLogin.credentialsErrorTitle[language],
                text: texts.employeeLogin.credentialsErrorMessage[language],
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
        }
    };

    // Determina qué logo mostrar basado en la prop 'theme'
    const currentLogo = theme === 'light' ? logoLight : logoDark;

    return (
        <div className="employee-login-container">
            <div className={`login-form-card ${logoAnimated ? 'animated' : ''}`}>
                <img
                    src={currentLogo} // Usa la variable 'currentLogo' para el src de la imagen
                    alt="Green Lime Technologies Logo"
                    className="login-logo"
                />
                {/* Usar texto del idioma para el título */}
                <h2>{texts.employeeLogin.title[language]}</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <div className="input-icon-wrapper">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // Placeholder dinámico
                                placeholder={texts.employeeLogin.emailPlaceholder[language]}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-icon-wrapper">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                // Placeholder dinámico
                                placeholder={texts.employeeLogin.passwordPlaceholder[language]}
                                required
                            />
                        </div>
                    </div>
                    {/* Usar texto del idioma para el botón */}
                    <button type="submit" className="login-button">{texts.employeeLogin.loginButton[language]}</button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLogin;