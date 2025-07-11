import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import texts from '../../data/texts'; // Asegúrate de que esta ruta sea correcta
import ServerImage from '../../assets/images/Server.jpg'; // Asegúrate de que esta ruta sea correcta

const HomePage = ({ language }) => {
    const homeContainerRef = useRef(null);

    useEffect(() => {
        if (homeContainerRef.current) {
            // Añade la clase 'loaded' después de que el componente se monte
            homeContainerRef.current.classList.add('loaded');
        }

        const startPosition = window.scrollY; // Posición inicial del scroll
        const targetPosition = 115; // Posición final deseada
        const duration = 500; // 0.5 segundos en milisegundos
        let startTime = null;

        const animateScroll = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const easedProgress = easeInOutQuad(progress);

            window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress);

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        // Inicia la animación de scroll
        requestAnimationFrame(animateScroll);

    }, []); // El array de dependencias vacío asegura que esto se ejecute solo una vez al montar

    return (
        <div className={styles.homeContainer} ref={homeContainerRef}>
            {/* Tarjeta de Imagen (Fondo) */}
            <div className={styles.imageCard}>
                <img src={ServerImage} alt="Server Background" className={styles.imageBackground} />
            </div>

            {/* Tarjeta de Texto (Superpuesta) */}
            <div className={styles.textCard}>
                <h1 className={styles.title}>
                    {texts.homePage.title[language]}
                </h1>
                <p className={styles.description}>
                    {texts.homePage.description[language]}
                </p>
            </div>
        </div>
    );
};

export default HomePage;