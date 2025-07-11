import React from 'react';
import styles from './Services.module.css';
import texts from '../../data/texts';

const ServicesPage = ({ language }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{texts.servicesPage.title[language]}</h1>
            <p className={styles.description}>{texts.servicesPage.description[language]}</p>
        </div>
    );
};

export default ServicesPage;