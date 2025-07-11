import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import texts from '../../data/texts';

import logoLight from '../../assets/images/GreenLimeWhiteBackground.jpg';
import logoDark from '../../assets/images/GreenLimeGreyBackground.jpg';

import {
    FaHome,
    FaTools,
    FaInfoCircle,
    FaUsers,
    FaEnvelope,
    FaCog,
    FaMoon,
    FaSun,
    FaUserTie,
    FaGlobe,
    FaBars
} from 'react-icons/fa';

const Navbar = ({ language, toggleLanguage, theme, toggleTheme }) => {
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const settingsMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const navigate = useNavigate();

    // Effect to close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Close desktop settings dropdown if clicked outside
            if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
                setShowSettingsDropdown(false);
            }
            // Close mobile menu if clicked outside (and not on the hamburger icon itself)
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
        event.stopPropagation(); // Prevent event from bubbling up and immediately closing the dropdown via handleClickOutside
        setShowSettingsDropdown(prevState => !prevState);
        setShowMobileMenu(false); // Close mobile menu when opening settings
    };

    const handleHamburgerClick = (event) => {
        event.stopPropagation(); // Stop propagation for hamburger click
        setShowMobileMenu(prevState => !prevState);
        setShowSettingsDropdown(false); // Close settings dropdown when opening mobile menu
    };

    const handleLinkClick = () => {
        // Close both menus when a nav link is clicked
        setShowMobileMenu(false);
        setShowSettingsDropdown(false);
    };

    const handleThemeClick = (event) => {
        event.stopPropagation();
        toggleTheme();
        setShowSettingsDropdown(false);
        if (showMobileMenu) { // If clicked from mobile menu, close mobile menu too
            setShowMobileMenu(false);
        }
    };

    // MODIFICAR: Ahora navega a /employee-login en lugar de /employee-access
    const handleEmployeeLoginClick = (event) => {
        event.stopPropagation();
        navigate('/employee-login'); // Cambiado de /employee-access a /employee-login
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
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/" onClick={handleLinkClick}>
                    <img
                        src={theme === 'light' ? logoLight : logoDark}
                        alt="Green Lime Technologies Logo"
                        className={styles.logo}
                    />
                </Link>
            </div>

            {/* Hamburger menu for mobile (visible on mobile, hidden on desktop) */}
            <div className={styles.hamburgerMenu} onClick={handleHamburgerClick} ref={hamburgerRef}>
                <FaBars />
            </div>

            {/* Desktop Navigation List (visible on desktop, hidden on mobile) */}
            <ul className={styles.desktopNavList}>
                <li><Link to="/home" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="" /*/community*/ className={styles.navLink} onClick={handleLinkClick}><FaUsers className={styles.navIcon} />{texts.navbar.community[language]}</Link></li>
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

                        {/* MODIFICAR: Ahora llama a handleEmployeeLoginClick */}
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

            {/* Mobile Overlay Navigation List (hidden on desktop, visible when toggled on mobile) */}
            <ul className={`${styles.mobileNavOverlay} ${showMobileMenu ? styles.active : ''}`} ref={mobileMenuRef}>
                {/* All nav links for mobile */}
                <li><Link to="/home" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="" /*/community*/ className={styles.navLink} onClick={handleLinkClick}><FaUsers className={styles.navIcon} />{texts.navbar.community[language]}</Link></li>
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>

                {/* Mobile-specific settings items - always visible in this overlay when active */}
                <li className={styles.mobileSettingItem} onClick={handleThemeClick}>
                    {theme === 'light' ? (
                        <FaMoon className={styles.dropdownItemIcon} />
                    ) : (
                        <FaSun className={styles.dropdownItemIcon} />
                    )}
                    {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                </li>
                {/* MODIFICAR: Ahora llama a handleEmployeeLoginClick */}
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