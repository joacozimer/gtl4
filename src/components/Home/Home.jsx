import React, { useEffect, useRef, memo } from 'react';
import styles from './Home.module.css';
import texts from '../../data/texts';
import ServerImage from '../../assets/images/Server.jpg';
import GreenLimeLogo from '../../assets/images/GreenLimeWhiteBackground.png';

const HomePage = memo(({ language, theme, onIntroAnimationComplete }) => {
    const homeContainerRef = useRef(null);

    useEffect(() => {
        // Marcar como cargado para posibles animaciones CSS
        if (homeContainerRef.current) {
            homeContainerRef.current.classList.add('loaded');
        }

        // Notificar que la animación de intro ha completado (si existe la función)
        if (typeof onIntroAnimationComplete === 'function') {
            // Simular finalización de animación después de un tiempo
            const timer = setTimeout(() => {
                onIntroAnimationComplete(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [onIntroAnimationComplete]);

    // Efecto separado para el scroll suave
    useEffect(() => {
        const startPosition = window.scrollY;
        const targetPosition = 115;
        const duration = 500;
        let startTime = null;
        let animationFrameId = null;

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
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        animationFrameId = requestAnimationFrame(animateScroll);

        // Limpieza para evitar memory leaks
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className={styles.homeContainer} ref={homeContainerRef} data-theme={theme}>
            <div className={styles.imageCard}>
                <img 
                    src={ServerImage} 
                    alt="Server Background" 
                    className={styles.imageBackground} 
                    loading="eager" 
                    fetchPriority="high"
                />
            </div>

            <div className={styles.textCard}>
                <img
                    src={GreenLimeLogo}
                    alt="Green Lime Technologies Logo"
                    className={styles.greenLimeLogo}
                    width="280"
                    height="auto"
                    loading="eager"
                />
                <p className={styles.description}>
                    {texts.homePage.description[language]}
                </p>
            </div>
        </div>
    );
});

export default HomePage;