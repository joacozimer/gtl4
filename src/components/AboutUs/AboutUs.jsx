import React from 'react';
import styles from './AboutUs.module.css';
import texts from '../../data/texts'; // Importa el objeto texts
import aboutUsGif from '../../assets/images/Nosotros .jpg';

const AboutUsPage = ({ language }) => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundGifWrapper}>
                <img src={aboutUsGif} alt="Background" className={styles.backgroundGif} />
            </div>
            {/* ✨ CAMBIO AQUÍ: Usar el título de texts.js */}
            <h1 className={styles.title}>{texts.aboutUsPage.title[language]}</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.cardText}>
                    <p className={styles.introText}>{texts.aboutUsPage.introText[language]}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;