import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import texts from '../../data/texts';
import { FaUser, FaEnvelope, FaTag, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
    // Cambiamos a useRef para que su valor persista a través de renderizaciones sin causar re-renders
    // y no se resetee con cada ejecución del setInterval si el servidor sigue caído.
    const serverOfflineAlertShown = useRef(false);

    const intervalRef = useRef(null);

    const BACKEND_URL = 'http://localhost:5000';

    const checkServerStatus = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/status`);
            if (response.ok) {
                setServerStatus('✅ Servidor en línea');
                setServerIsOnline(true);
                // Si el servidor está online, reiniciamos la bandera
                serverOfflineAlertShown.current = false;
            } else {
                setServerStatus('❌ Servidor caído');
                setServerIsOnline(false);
                // Usamos .current para acceder y modificar el valor de la ref
                if (!serverOfflineAlertShown.current) {
                    MySwal.fire({
                        icon: 'error',
                        title: '¡Servidor caído!',
                        text: 'No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.',
                        confirmButtonText: 'Entendido'
                    });
                    // Marcamos que la alerta ya se mostró
                    serverOfflineAlertShown.current = true;
                }
            }
        } catch (error) {
            console.error('Error al verificar el estado del servidor:', error);
            setServerStatus('❌ Servidor caído');
            setServerIsOnline(false);
            // Usamos .current para acceder y modificar el valor de la ref
            if (!serverOfflineAlertShown.current) {
                MySwal.fire({
                    icon: 'error',
                    title: '¡Servidor caído!',
                    text: 'No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.',
                    confirmButtonText: 'Entendido'
                });
                // Marcamos que la alerta ya se mostró
                serverOfflineAlertShown.current = true;
            }
        }
    };

    useEffect(() => {
        // Ejecutar la verificación al montar el componente
        checkServerStatus();

        // Configurar el intervalo para verificar el estado cada 5 segundos
        intervalRef.current = setInterval(checkServerStatus, 5000);

        // Limpiar el intervalo al desmontar el componente
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []); // El array vacío asegura que se ejecute solo una vez al montar y desmontar

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
            didOpen: () => {
                MySwal.showLoading();
            }
        });

        try {
            const response = await fetch(`${BACKEND_URL}/send-contact-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                MySwal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Mensaje enviado con éxito. Te responderemos pronto.',
                    confirmButtonText: 'Ok'
                });
                // Opcional: Limpiar el formulario
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    reason: '',
                    message: ''
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Error al enviar',
                    text: data.message || 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
                    confirmButtonText: 'Cerrar'
                });
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            MySwal.fire({
                icon: 'error',
                title: 'Error de conexión',
                text: 'No se pudo conectar con el servidor. Verifica tu conexión o inténtalo más tarde.',
                confirmButtonText: 'Cerrar'
            });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>{texts.contactPage.title[language]}</h1>
                <p className={styles.description}>
                    {texts.contactPage.description[language]}
                </p>
                <div className={`${styles.serverStatus} ${serverIsOnline ? styles.online : styles.offline}`}>
                    {serverStatus}
                </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <div className={styles.inputWrapper}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            type="text"
                            id="name"
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
                            id="email"
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
                            id="subject"
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
                            id="reason"
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
                            id="message"
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
    );
};

export default ContactPage;