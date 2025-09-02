import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import logoLight from '../../assets/images/GreenLimeWhiteBackground.jpg';
import logoDark from '../../assets/images/GreenLimeGreyBackground.jpg';
import texts from '../../data/texts';

import './EmployeeLogin.css';
import ChangePasswordForm from './ChangePasswordForm';

const API_BASE_URL = 'http://localhost:5000';

const EmployeeLogin = ({ language, theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logoAnimated, setLogoAnimated] = useState(false);
    const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
    const [employeeEmailForPasswordChange, setEmployeeEmailForPasswordChange] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoAnimated(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.endsWith('@greenlimetech.com')) {
            await Swal.fire({
                icon: 'error',
                title: texts.employeeLogin.domainErrorTitle[language],
                text: texts.employeeLogin.domainErrorMessage[language],
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/employee-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('jwtToken', data.token);
                localStorage.setItem('employeeData', JSON.stringify(data.employee));

                if (data.employee.mustChangePassword) {
                    await Swal.fire({
                        icon: 'warning',
                        title: texts.employeeLogin.changePasswordRequiredTitle[language] || 'Cambio de Contraseña Requerido',
                        text: texts.employeeLogin.changePasswordRequiredMessage[language] || 'Debes cambiar tu contraseña por seguridad.',
                        showCancelButton: false,
                        confirmButtonText: 'Cambiar Contraseña',
                        allowOutsideClick: false,
                        customClass: {
                            popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                            confirmButton: theme === 'dark' ? 'swal-button-dark' : 'swal-button-light',
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setEmployeeEmailForPasswordChange(data.employee.email);
                            setShowChangePasswordForm(true);
                        }
                    });
                } else {
                    await Swal.fire({
                        icon: 'success',
                        title: texts.employeeLogin.loginSuccessTitle[language],
                        text: texts.employeeLogin.loginSuccessMessage[language],
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        customClass: {
                            popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                        }
                    });
                    console.log('Inicio de sesión exitoso. Token:', data.token);
                    console.log('Datos del empleado:', data.employee);
                    navigate('/employee-access-dashboard');
                }
            } else {
                await Swal.fire({
                    icon: 'error',
                    title: texts.employeeLogin.credentialsErrorTitle[language],
                    text: data.message || texts.employeeLogin.credentialsErrorMessage[language],
                    customClass: {
                        popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                    }
                });
                console.error('Error de inicio de sesión:', data.message);
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            await Swal.fire({
                icon: 'error',
                title: texts.employeeLogin.connectionErrorTitle[language] || 'Error de conexión',
                text: texts.employeeLogin.connectionErrorMessage[language] || 'No se pudo conectar con el servidor. Inténtalo de nuevo.',
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
        }
    };

    const currentLogo = theme === 'light' ? logoLight : logoDark;

    return (
        <div className="employee-login-container">
            {!showChangePasswordForm ? (
                <div className={`login-form-card ${logoAnimated ? 'animated' : ''}`}>
                    <img
                        src={currentLogo}
                        alt="Green Lime Technologies Logo"
                        className="login-logo"
                    />
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
                                    placeholder={texts.employeeLogin.passwordPlaceholder[language]}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="login-button">
                            {texts.employeeLogin.loginButton[language]}
                        </button>
                    </form>
                </div>
            ) : (
                <ChangePasswordForm
                    email={employeeEmailForPasswordChange}
                    language={language}
                    theme={theme}
                    onPasswordChangeSuccess={() => {
                        setShowChangePasswordForm(false);
                        navigate('/employee-access-dashboard');
                    }}
                />
            )}
        </div>
    );
};

export default EmployeeLogin;