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
    FaBars,
    FaBolt
} from 'react-icons/fa';

// Importa las imágenes directamente, el bundler las procesará
import ArgentinaFlag from '../../assets/images/ArgentinaFlag.png';
import USFlag from '../../assets/images/USFlag.png';
import BrasilFlag from '../../assets/images/BrasilFlag.png';

const Navbar = ({ language, toggleLanguage, theme, toggleTheme, isIntroAnimationActive }) => {
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNavbarContent, setShowNavbarContent] = useState(!isIntroAnimationActive);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const settingsMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const languageDropdownRef = useRef(null);
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
        const handleClickOutside = (event) => {
            if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
                setShowSettingsDropdown(false);
            }
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target) &&
                !(event.target.closest(`.${styles.navLink}`))
            ) {
                setShowLanguageDropdown(false);
            }
            if (showMobileMenu && mobileMenuRef.current && hamburgerRef.current &&
                !mobileMenuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
                setShowMobileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMobileMenu]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileMenu) {
                setShowMobileMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showMobileMenu]);

    const handleSettingsToggle = () => {
        setShowSettingsDropdown(!showSettingsDropdown);
        setShowLanguageDropdown(false);
        setShowMobileMenu(false);
    };

    const handleLanguageToggleClick = (event) => {
        event.stopPropagation();
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const handleLanguageChange = (lang) => {
        toggleLanguage(lang);
        setShowLanguageDropdown(false);
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleThemeClick = (e) => {
        e.stopPropagation();
        toggleTheme();
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleEmployeeLoginClick = (e) => {
        e.stopPropagation();
        navigate('/employee-login');
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleChatClick = (e) => {
        e.stopPropagation();
        navigate('/chat');
        setShowSettingsDropdown(false);
        if (showMobileMenu) {
            setShowMobileMenu(false);
        }
    };

    const handleLinkClick = () => {
        setShowMobileMenu(false);
        setShowSettingsDropdown(false);
        setShowLanguageDropdown(false);
    };

    const currentLogo = theme === 'light' ? logoLight : logoDark;

    return (
        <nav className={`${styles.navbar} ${showNavbarContent ? styles.visible : ''}`}>
            <div className={styles.logoContainer}>
                <Link to="/" onClick={handleLinkClick}>
                    <img src={currentLogo} alt="Green Lime Technologies Logo" className={styles.logo} />
                </Link>
            </div>

            <ul className={styles.desktopNavList}>
                <li><Link to="/" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>
            </ul>

            <div className={`${styles.settingsMenu} ${showSettingsDropdown ? styles.active : ''}`} onClick={handleSettingsToggle} ref={settingsMenuRef}>
                <FaCog className={styles.settingsIcon} />
                {showSettingsDropdown && (
                    <div className={styles.dropdownContent}>
                        {//<li onClick={handleChatClick} className={styles.navLink}>
                                //<div className={styles.dropdownItemIcon}><FaBolt /></div>
                            //<span>{texts.navbar.quickAssist[language]}</span>
                        //</li>
                        }
                        <li onClick={handleThemeClick} className={styles.navLink}>
                            <div className={styles.dropdownItemIcon}>
                                {theme === 'light' ? <FaMoon /> : <FaSun />}
                            </div>
                            <span>
                                {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                            </span>
                        </li>
                        <li onClick={handleEmployeeLoginClick} className={styles.navLink}>
                            <div className={styles.dropdownItemIcon}><FaUserTie /></div>
                            <span>{texts.navbar.settings.employeeAccess[language]}</span>
                        </li>
                        <div className={styles.dropdownDivider}></div>
                        <li
                            className={`${styles.navLink} ${showLanguageDropdown ? styles.active : ''}`}
                            onClick={handleLanguageToggleClick}
                            ref={languageDropdownRef}
                        >
                            <div className={styles.dropdownItemIcon}><FaGlobe /></div>
                            <span>{texts.navbar.settings.language[language]}</span>
                            {showLanguageDropdown && (
                                <ul className={styles.languageDropdownMenu}>
                                    <li onClick={() => handleLanguageChange('en')} className={styles.navLink}>
                                        <img src={USFlag} alt="US Flag" className={styles.flagIcon} />
                                        <span>English</span>
                                    </li>
                                    <li onClick={() => handleLanguageChange('es')} className={styles.navLink}>
                                        <img src={ArgentinaFlag} alt="Argentina Flag" className={styles.flagIcon} />
                                        <span>Español</span>
                                    </li>
                                    <li onClick={() => handleLanguageChange('pt')} className={styles.navLink}>
                                        <img src={BrasilFlag} alt="Brasil Flag" className={styles.flagIcon} />
                                        <span>Português</span>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </div>
                )}
            </div>

            <div className={styles.hamburgerMenu} onClick={() => setShowMobileMenu(!showMobileMenu)} ref={hamburgerRef}>
                <FaBars />
            </div>

            {showMobileMenu && (
                <ul className={`${styles.mobileNavOverlay} ${showMobileMenu ? styles.active : ''}`} ref={mobileMenuRef}>
                    <li><Link to="/" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                    <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                    <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                    <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>
                    <div className={styles.mobileDivider}></div>
                    <li onClick={handleChatClick} className={styles.navLink}>
                        <div className={styles.dropdownItemIcon}><FaBolt /></div>
                        <span>{texts.navbar.quickAssist[language]}</span>
                    </li>
                    <li onClick={handleThemeClick} className={styles.navLink}>
                        <div className={styles.dropdownItemIcon}>
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </div>
                        <span>
                            {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                        </span>
                    </li>
                    <li onClick={handleEmployeeLoginClick} className={styles.navLink}>
                        <div className={styles.dropdownItemIcon}><FaUserTie /></div>
                        <span>{texts.navbar.settings.employeeAccess[language]}</span>
                    </li>
                    <li className={styles.navLink} onClick={handleLanguageToggleClick}>
                        <div className={styles.dropdownItemIcon}><FaGlobe /></div>
                        <span>{texts.navbar.settings.language[language]}</span>
                        {showLanguageDropdown && (
                            <ul className={styles.languageDropdownMenuMobile}>
                                <li onClick={() => handleLanguageChange('en')} className={styles.navLink}>
                                    <img src={USFlag} alt="US Flag" className={styles.flagIcon} />
                                    <span>English</span>
                                </li>
                                <li onClick={() => handleLanguageChange('es')} className={styles.navLink}>
                                    <img src={ArgentinaFlag} alt="Argentina Flag" className={styles.flagIcon} />
                                    <span>Español</span>
                                </li>
                                <li onClick={() => handleLanguageChange('pt')} className={styles.navLink}>
                                    <img src={BrasilFlag} alt="Brasil Flag" className={styles.flagIcon} />
                                    <span>Português</span>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;