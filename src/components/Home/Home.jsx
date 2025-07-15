import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import texts from '../../data/texts';
import ServerImage from '../../assets/images/Server.jpg';
import GreenLimeLogo from '../../assets/images/GreenLimeWhiteBackground.png';

const HomePage = ({ language }) => {
    const homeContainerRef = useRef(null);

    useEffect(() => {
        if (homeContainerRef.current) {
            homeContainerRef.current.classList.add('loaded');
        }

        const startPosition = window.scrollY;
        const targetPosition = 115;
        const duration = 500;
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

        requestAnimationFrame(animateScroll);

    }, []);

    return (
        <div className={styles.homeContainer} ref={homeContainerRef}>
            <div className={styles.imageCard}>
                <img src={ServerImage} alt="Server Background" className={styles.imageBackground} />
            </div>

            <div className={styles.textCard}>
                <img
                    src={GreenLimeLogo}
                    alt="Green Lime Technologies Logo"
                    className={styles.greenLimeLogo}
                />
                <p className={styles.description}>
                    {texts.homePage.description[language]}
                </p>
            </div>
        </div>
    );
};

export default HomePage;