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

            {/* Nuevo título para los servicios clave */}
            <h2 className={styles.newServicesSectionTitle}>
                {texts.servicesPage.sections.newServices.title[language]}
            </h2>

            <div className={styles.servicesGrid}>
                {/* Ahora solo se renderizan los "Nuevos servicios" */}
                {texts.servicesPage.sections.newServices.items.map((service, index) => (
                    <div className={styles.serviceCard} key={index}>
                        <h2>
                            <span className={styles.emoji}>{service.icon}</span>
                            {service.title[language]}
                        </h2>
                        {service.content ? (
                            <p>{service.content[language]}</p>
                        ) : (
                            // Renderiza sub-elementos si existen
                            <ul className={styles.subServiceList}>
                                {service.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem[language]}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.commitmentSection}>
                <h2>{texts.servicesPage.commitment.title[language]}</h2>
                <p>{texts.servicesPage.commitment.content[language]}</p>
            </div>
        </div>
    );
};

export default ServicesPage;