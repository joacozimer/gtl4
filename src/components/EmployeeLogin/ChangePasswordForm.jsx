import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaLock } from 'react-icons/fa';
import texts from '../../data/texts';

const API_BASE_URL = 'http://localhost:5000';

const ChangePasswordForm = ({ email, language, theme, onPasswordChangeSuccess }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            await Swal.fire({
                icon: 'error',
                title: texts.changePassword.passwordMismatchTitle[language] || 'Las contraseñas no coinciden',
                text: texts.changePassword.passwordMismatchMessage[language] || 'Asegúrate de que la nueva contraseña y su confirmación sean iguales.',
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            return;
        }

        if (newPassword.length < 8) {
            await Swal.fire({
                icon: 'error',
                title: texts.changePassword.passwordLengthTitle[language] || 'Contraseña Demasiado Corta',
                text: texts.changePassword.passwordLengthMessage[language] || 'La contraseña debe tener al menos 8 caracteres.',
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/employees/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                await Swal.fire({
                    icon: 'success',
                    title: texts.changePassword.changeSuccessTitle[language] || 'Contraseña Actualizada',
                    text: texts.changePassword.changeSuccessMessage[language] || 'Tu contraseña ha sido actualizada exitosamente.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    customClass: {
                        popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                    }
                });
                onPasswordChangeSuccess();
            } else {
                await Swal.fire({
                    icon: 'error',
                    title: texts.changePassword.changeErrorTitle[language] || 'Error al Cambiar Contraseña',
                    text: data.message || texts.changePassword.changeErrorMessage[language] || 'Hubo un error al intentar cambiar tu contraseña.',
                    customClass: {
                        popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                    }
                });
            }
        } catch (error) {
            console.error('Error al conectar con el servidor para cambiar contraseña:', error);
            await Swal.fire({
                icon: 'error',
                title: texts.changePassword.connectionErrorTitle[language] || 'Error de Conexión',
                text: texts.changePassword.connectionErrorMessage[language] || 'No se pudo conectar con el servidor para cambiar la contraseña.',
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
        }
    };

    return (
        <div className={`login-form-card animated`}>
            <h2>{texts.changePassword.title[language] || 'Cambiar Contraseña'}</h2>
            <p className="change-password-info">{texts.changePassword.info[language] || 'Por favor, establece una nueva contraseña para tu cuenta.'}</p>
            <form onSubmit={handleChangePassword} className="login-form">
                <div className="form-group">
                    <div className="input-icon-wrapper">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder={texts.changePassword.newPasswordPlaceholder[language] || 'Nueva Contraseña'}
                            required
                            minLength="8"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon-wrapper">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            id="confirmNewPassword"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder={texts.changePassword.confirmPasswordPlaceholder[language] || 'Confirmar Nueva Contraseña'}
                            required
                            minLength="8"
                        />
                    </div>
                </div>
                <button type="submit" className="login-button">
                    {texts.changePassword.submitButton[language] || 'Establecer Nueva Contraseña'}
                </button>
            </form>
        </div>
    );
};

export default ChangePasswordForm;