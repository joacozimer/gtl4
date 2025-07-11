import React from 'react';
import styles from './Services.module.css';
import texts from '../../data/texts';
import serviceImg from '../../assets/images/Services.jpg';

const ServicesPage = ({ language }) => {
    return (
        <div className={styles.container}>
            {/* ✅ Imagen con texto encima */}
            <div className={styles.heroSection}>
                <img
                    src={serviceImg}
                    alt="Servicios"
                    className={styles.heroImage}
                />
                <div className={styles.heroText}>
                    <h1>{texts.servicesPage.title[language]}</h1>
                    <p>{texts.servicesPage.description[language]}</p>
                </div>
            </div>

            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <h2>{texts.servicesPage.sections.firmwareUpdate.title[language]}</h2>
                    <p>{texts.servicesPage.sections.firmwareUpdate.content[language]}</p>
                </div>
                <div className={styles.serviceCard}>
                    <h2>{texts.servicesPage.sections.firmwareImplementation.title[language]}</h2>
                    <p>{texts.servicesPage.sections.firmwareImplementation.content[language]}</p>
                </div>
                <div className={styles.serviceCard}>
                    <h2>{texts.servicesPage.sections.hardwareCompatibility.title[language]}</h2>
                    <p>{texts.servicesPage.sections.hardwareCompatibility.content[language]}</p>
                </div>
                <div className={styles.serviceCard}>
                    <h2>{texts.servicesPage.sections.securityEnhancements.title[language]}</h2>
                    <p>{texts.servicesPage.sections.securityEnhancements.content[language]}</p>
                </div>
            </div>

            <div className={styles.expertiseSection}>
                <h2>{texts.servicesPage.firmwareService.title[language]}</h2>
                <p>{texts.servicesPage.firmwareService.content[language]}</p>
            </div>
        </div>
    );
};

export default ServicesPage;
