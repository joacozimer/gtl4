import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import texts from '../../data/texts';
import handshakeImg from '../../assets/images/HandShake.jpg';
import { FaUser, FaEnvelope, FaTag, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Importa el hook de reCAPTCHA

const MySwal = withReactContent(Swal);

const ContactPage = ({ language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        reason: '',
        message: ''
    });
    const [serverStatus, setServerStatus] = useState('Verificando...');
    const [serverIsOnline, setServerIsOnline] = useState(false);
    const serverOfflineAlertShown = useRef(false);
    const intervalRef = useRef(null);

    // Obtiene la función executeRecaptcha del hook
    const { executeRecaptcha } = useGoogleReCaptcha();

    const BACKEND_URL = 'http://localhost:5000';

    const checkServerStatus = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/status`);
            if (response.ok) {
                setServerStatus('✅ Servidor en línea');
                setServerIsOnline(true);
                serverOfflineAlertShown.current = false;
            } else throw new Error();
        } catch {
            setServerStatus('❌ Servidor caído');
            setServerIsOnline(false);
            if (!serverOfflineAlertShown.current) {
                MySwal.fire({
                    icon: 'error',
                    title: '¡Servidor caído!',
                    text: 'No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.',
                    confirmButtonText: 'Entendido'
                });
                serverOfflineAlertShown.current = true;
            }
        }
    };

    useEffect(() => {
        checkServerStatus();
        intervalRef.current = setInterval(checkServerStatus, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!serverIsOnline) {
            MySwal.fire({
                icon: 'error',
                title: 'Servidor desconectado',
                text: 'No se puede enviar el formulario porque el servidor está fuera de línea.',
                confirmButtonText: 'Entendido'
            });
            return;
        }

        MySwal.fire({
            title: 'Enviando...',
            text: 'Por favor, espera.',
            allowOutsideClick: false,
            didOpen: () => MySwal.showLoading()
        });

        let recaptchaToken = '';
        try {
            // Ejecuta reCAPTCHA para obtener un token
            if (!executeRecaptcha) {
                console.error('executeRecaptcha no está disponible.');
                MySwal.fire({
                    icon: 'error',
                    title: 'Error de seguridad',
                    text: 'No se pudo cargar la verificación de seguridad. Por favor, recarga la página e intenta de nuevo.',
                    confirmButtonText: 'Cerrar'
                });
                return;
            }
            recaptchaToken = await executeRecaptcha('contact_form'); // 'contact_form' es una acción que puedes definir
            if (!recaptchaToken) {
                throw new Error('No se pudo obtener el token de reCAPTCHA.');
            }
        } catch (recaptchaError) {
            console.error('Error al ejecutar reCAPTCHA:', recaptchaError);
            MySwal.fire({
                icon: 'error',
                title: 'Error de seguridad',
                text: 'Falló la verificación de seguridad. Por favor, intenta de nuevo.',
                confirmButtonText: 'Cerrar'
            });
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/send-contact-form`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Envía el token de reCAPTCHA junto con los datos del formulario
                body: JSON.stringify({ ...formData, recaptchaToken })
            });

            // *** NUEVA LÓGICA PARA MANEJAR EL CÓDIGO 429 ***
            if (response.status === 429) {
                MySwal.fire({
                    icon: 'warning', // Puedes usar 'warning' o 'error'
                    title: '¡Demasiadas solicitudes!',
                    text: 'Has enviado demasiadas solicitudes en poco tiempo. Por favor, espera un momento antes de intentarlo de nuevo.',
                    confirmButtonText: 'Entendido'
                });
                return; // Detiene el flujo de la función aquí
            }

            const data = await response.json();

            if (response.ok) {
                MySwal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Mensaje enviado con éxito. Te responderemos pronto.',
                    confirmButtonText: 'Ok'
                });
                setFormData({ name: '', email: '', subject: '', reason: '', message: '' });
            } else {
                // Maneja el caso en que el servidor rechace el mensaje (ej. por reCAPTCHA fallido u otros errores del servidor)
                throw new Error(data.message || 'Error al enviar el formulario.');
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            MySwal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: error.message || 'No se pudo conectar con el servidor. Intenta más tarde.',
                confirmButtonText: 'Cerrar'
            });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.sideBySide}>
                <div className={styles.infoCard}>
                    <img
                        src={handshakeImg}
                        alt="HandShake"
                        className={styles.zoomImage}
                    />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>{texts.contactPage.title[language]}</h1>
                        <p className={styles.description}>{texts.contactPage.description[language]}</p>
                    </div>
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <FaUser className={styles.inputIcon} />
                            <input
                                type="text"
                                name="name"
                                placeholder={texts.contactPage.form.name[language]}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <FaEnvelope className={styles.inputIcon} />
                            <input
                                type="email"
                                name="email"
                                placeholder={texts.contactPage.form.email[language]}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <FaTag className={styles.inputIcon} />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Asunto"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <FaQuestionCircle className={styles.inputIcon} />
                            <select
                                name="reason"
                                className={styles.selectField}
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Motivo de Contacto</option>
                                <option value="general">Consulta General</option>
                                <option value="support">Soporte Técnico</option>
                                <option value="billing">Facturación</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
                            <FaCommentDots className={`${styles.inputIcon} ${styles.textareaIcon}`} />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder={texts.contactPage.form.message[language]}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        {texts.contactPage.form.submit[language]}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;