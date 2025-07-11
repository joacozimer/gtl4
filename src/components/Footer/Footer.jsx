import React from 'react';
import styles from './Footer.module.css';
import texts from '../../data/texts';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socialLinks}>
                    <a href="https://www.Whatsapp.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Whatsapp">
                        <FaWhatsapp />
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                        <FaXTwitter /> {/* Changed icon to FaXTwitter */}
                    </a>
                    <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>

                <div className={styles.legalLinks}>
                    <Link to="/privacy-policy" className={styles.legalLink}>
                        {texts.footer.privacyPolicy?.[language] || 'Políticas de Privacidad'}
                    </Link>
                    <span className={styles.legalSeparator}>|</span>
                    <Link to="/terms-conditions" className={styles.legalLink}>
                        {texts.footer.termsConditions?.[language] || 'Términos y Condiciones'}
                    </Link>
                </div>
            </div>

            <p className={styles.copyright}>{texts.footer.copyright ? texts.footer.copyright?.[language] : '© 2024 Green Lime Technologies. Todos los derechos reservados.'}</p>
        </footer>
    );
};

export default Footer;