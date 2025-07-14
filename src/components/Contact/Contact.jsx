import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import texts from '../../data/texts';
import handshakeImg from '../../assets/images/HandShake.jpg';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const MySwal = withReactContent(Swal);

const ContactPage = ({ language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // Se mantienen serverStatus y serverIsOnline para la lógica interna, pero no se mostrarán
    const [serverStatus, setServerStatus] = useState('Verificando...');
    const [serverIsOnline, setServerIsOnline] = useState(false);
    const serverOfflineAlertShown = useRef(false);
    const intervalRef = useRef(null);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const BACKEND_URL = 'http://localhost:5000'; //poner el dominio donde esta el server

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
        intervalRef.current = setInterval(checkServerStatus, 10000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (
            (name === 'name' && value.length > 100) ||
            (name === 'email' && value.length > 100) ||
            (name === 'message' && value.length > 2000)
        ) return;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            MySwal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos.',
            });
            return;
        }

        if (!isValidEmail(formData.email)) {
            MySwal.fire({
                icon: 'warning',
                title: 'Email inválido',
                text: 'Por favor, ingresa un correo válido.',
            });
            return;
        }

        if (!serverIsOnline) {
            MySwal.fire({
                icon: 'error',
                title: 'Servidor desconectado',
                text: 'No se puede enviar el formulario porque el servidor está fuera de línea.',
            });
            return;
        }

        MySwal.fire({
            title: 'Enviando...',
            text: 'Por favor, espera.',
            allowOutsideClick: false,
            didOpen: () => MySwal.showLoading(),
        });

        let recaptchaToken = '';
        try {
            if (!executeRecaptcha) throw new Error('reCAPTCHA no disponible');
            recaptchaToken = await executeRecaptcha('contact_form');
            if (!recaptchaToken) throw new Error('No se pudo obtener el token de reCAPTCHA.');
        } catch (err) {
            MySwal.fire({
                icon: 'error',
                title: 'Error de seguridad',
                text: err.message || 'Falló la verificación de seguridad. Intenta nuevamente.',
            });
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/send-contact-form`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            if (response.status === 429) {
                MySwal.fire({
                    icon: 'warning',
                    title: '¡Demasiadas solicitudes!',
                    text: 'Has enviado demasiadas solicitudes en poco tiempo. Por favor espera un momento.',
                });
                return;
            }

            const data = await response.json();

            if (response.ok) {
                MySwal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Mensaje enviado con éxito. Te responderemos pronto.',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Error al enviar el formulario.');
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: error.message || 'No se pudo conectar con el servidor. Intenta más tarde.',
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
                        {/* Se eliminó la línea que mostraba el serverStatus */}
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
                                maxLength={100}
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
                                maxLength={100}
                            />
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
                                maxLength={2000}
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