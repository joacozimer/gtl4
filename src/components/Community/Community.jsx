import React from 'react';
import styles from './Community.module.css';
import texts from '../../data/texts';

const CommunityPage = ({ language }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{texts.communityPage.title[language]}</h1>
            <p className={styles.description}>{texts.communityPage.description[language]}</p>
        </div>
    );
};

export default CommunityPage;