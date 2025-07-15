import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import texts from '../../data/texts';

import logoLight from '../../assets/images/GreenLimeWhiteBackground.png';
import logoDark from '../../assets/images/GreenLimeWhiteBackground.png';

import {
    FaHome,
    FaTools,
    FaInfoCircle,
    FaEnvelope,
    FaCog,
    FaMoon,
    FaSun,
    FaUserTie,
    FaGlobe,
    FaBars
} from 'react-icons/fa';

const Navbar = ({ language, toggleLanguage, theme, toggleTheme, isIntroAnimationActive }) => {
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNavbarContent, setShowNavbarContent] = useState(!isIntroAnimationActive);

    const settingsMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isIntroAnimationActive) {
            setShowNavbarContent(true);
        } else {
            const animationDelay = 1500;
            const timer = setTimeout(() => {
                setShowNavbarContent(true);
            }, animationDelay);
            return () => clearTimeout(timer);
        }
    }, [isIntroAnimationActive]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
                setShowSettingsDropdown(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                setShowMobileMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSettingsClick = (event) => {
        event.stopPropagation();
        setShowSettingsDropdown(prevState => !prevState);
        setShowMobileMenu(false);
    };

    const handleHamburgerClick = (event) => {
        event.stopPropagation();
        setShowMobileMenu(prevState => !prevState);
        setShowSettingsDropdown(false);
    };

    const handleLinkClick = () => {
        setShowMobileMenu(false);
        setShowSettingsDropdown(false);
    };

    const handleThemeClick = (event) => {
        event.stopPropagation();
        toggleTheme();
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleEmployeeLoginClick = (event) => {
        event.stopPropagation();
        navigate('/employee-login');
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleLanguageClick = (event) => {
        event.stopPropagation();
        toggleLanguage();
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    return (
        <nav className={`${styles.navbar} ${showNavbarContent ? styles.visible : ''}`}>
            <div className={styles.logoContainer}>
                <Link to="/" onClick={handleLinkClick}>
                    <img
                        src={theme === 'light' ? logoLight : logoDark}
                        alt="Green Lime Technologies Logo"
                        className={styles.logo}
                    />
                </Link>
            </div>

            <div className={styles.hamburgerMenu} onClick={handleHamburgerClick} ref={hamburgerRef}>
                <FaBars />
            </div>

            <ul className={styles.desktopNavList}>
                <li><Link to="/home" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>
            </ul>

            <div
                className={`${styles.settingsMenu} ${showSettingsDropdown ? styles.active : ''}`}
                onClick={handleSettingsClick}
                ref={settingsMenuRef}
            >
                <FaCog className={styles.settingsIcon} />

                {showSettingsDropdown && (
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropdownItem} onClick={handleThemeClick}>
                            {theme === 'light' ? (
                                <FaMoon className={styles.dropdownItemIcon} />
                            ) : (
                                <FaSun className={styles.dropdownItemIcon} />
                            )}
                            {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                        </div>

                        <div className={styles.dropdownItem} onClick={handleEmployeeLoginClick}>
                            <FaUserTie className={styles.dropdownItemIcon} />
                            {texts.navbar.settings.employeeAccess[language]}
                        </div>

                        <div className={styles.dropdownItem} onClick={handleLanguageClick}>
                            <FaGlobe className={styles.dropdownItemIcon} />
                            {texts.navbar.settings.language[language]} ({language === 'es' ? texts.navbar.settings.languageToggleEsToEn[language] : texts.navbar.settings.languageToggleEnToEs[language]})
                        </div>
                    </div>
                )}
            </div>

            <ul className={`${styles.mobileNavOverlay} ${showMobileMenu ? styles.active : ''}`} ref={mobileMenuRef}>
                <li><Link to="/home" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>

                <li className={styles.mobileSettingItem} onClick={handleThemeClick}>
                    {theme === 'light' ? (
                        <FaMoon className={styles.dropdownItemIcon} />
                    ) : (
                        <FaSun className={styles.dropdownItemIcon} />
                    )}
                    {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                </li>
                <li className={styles.mobileSettingItem} onClick={handleEmployeeLoginClick}>
                    <FaUserTie className={styles.dropdownItemIcon} />
                    {texts.navbar.settings.employeeAccess[language]}
                </li>
                <li className={styles.mobileSettingItem} onClick={handleLanguageClick}>
                    <FaGlobe className={styles.dropdownItemIcon} />
                    {texts.navbar.settings.language[language]} ({language === 'es' ? texts.navbar.settings.languageToggleEsToEn[language] : texts.navbar.settings.languageToggleEnToEs[language]})
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;