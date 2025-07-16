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

// Importa las imágenes directamente, el bundler las procesará
import ArgentinaFlag from '../../assets/images/ArgentinaFlag.png';
import USFlag from '../../assets/images/USFlag.png';
import BrasilFlag from '../../assets/images/BrasilFlag.png';

const Navbar = ({ language, toggleLanguage, theme, toggleTheme, isIntroAnimationActive }) => {
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNavbarContent, setShowNavbarContent] = useState(!isIntroAnimationActive);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false); // ✨ NUEVO ESTADO PARA EL MENÚ DE IDIOMAS

    const settingsMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const languageDropdownRef = useRef(null); // ✨ NUEVA REFERENCIA PARA EL MENÚ DE IDIOMAS
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
            // ✨ CAMBIO: Cierra el menú de idiomas si el clic es fuera y no en el propio botón de idioma
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target) &&
                !(event.target.closest(`.${styles.dropdownItemLanguage}`)) && // Para escritorio
                !(event.target.closest(`.${styles.dropdownItemLanguageMobile}`)) // Para móvil
            ) {
                setShowLanguageDropdown(false);
            }
            // Close mobile menu if click is outside and it's open
            if (showMobileMenu && mobileMenuRef.current && hamburgerRef.current &&
                !mobileMenuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
                setShowMobileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMobileMenu]); // Added showMobileMenu to dependency array

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileMenu) {
                setShowMobileMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showMobileMenu]);

    const handleSettingsToggle = () => { // ✨ RENOMBRADO de handleSettingsClick a handleSettingsToggle
        setShowSettingsDropdown(!showSettingsDropdown);
        setShowLanguageDropdown(false); // Cierra el dropdown de idioma al abrir/cerrar settings
        setShowMobileMenu(false); // Asegura que el menú móvil se cierre si está abierto
    };

    const handleLanguageToggleClick = (event) => { // ✨ NUEVA FUNCIÓN PARA EL BOTÓN DE IDIOMA
        event.stopPropagation();
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const handleLanguageChange = (lang) => { // ✨ NUEVA FUNCIÓN PARA CAMBIAR EL IDIOMA ESPECÍFICO
        toggleLanguage(lang); // ✨ Pasa el idioma como argumento a toggleLanguage
        setShowLanguageDropdown(false);
        setShowSettingsDropdown(false); // Cierra el menú de configuración al seleccionar idioma
        if (showMobileMenu) { // Cierra el menú móvil si la selección fue desde ahí
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

    const handleLinkClick = () => {
        setShowMobileMenu(false);
        setShowSettingsDropdown(false);
        setShowLanguageDropdown(false); // Cierra el dropdown de idioma al navegar
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
                {/*<li><Link to="/community" className={styles.navLink} onClick=*/}{/*{handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.community[language]}</Link></li>*/}
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>
            </ul>

            <div
                className={`${styles.settingsMenu} ${showSettingsDropdown ? styles.active : ''}`}
                onClick={handleSettingsToggle} // ✨ CAMBIO: Usar handleSettingsToggle
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
                        {/* ✨ INICIO: MENÚ DESPLEGABLE DE IDIOMAS PARA ESCRITORIO */}
                        <div className={styles.dropdownItemLanguage} onClick={handleLanguageToggleClick}>
                            <FaGlobe className={styles.dropdownItemIcon} />
                            {texts.navbar.settings.language[language]}
                            {showLanguageDropdown && (
                                <ul className={styles.languageDropdownMenu} ref={languageDropdownRef}>
                                    <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('es'); }}>
                                        <img src={ArgentinaFlag} alt="Español" className={styles.flagIcon} /> Español
                                    </li>
                                    <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('en'); }}>
                                        <img src={USFlag} alt="English" className={styles.flagIcon} /> English
                                    </li>
                                    <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('pt'); }}>
                                        <img src={BrasilFlag} alt="Português" className={styles.flagIcon} /> Português
                                    </li>
                                </ul>
                            )}
                        </div>
                        {/* ✨ FIN: MENÚ DESPLEGABLE DE IDIOMAS PARA ESCRITORIO */}
                    </div>
                )}
            </div>

            <div className={styles.hamburgerMenu} onClick={() => setShowMobileMenu(!showMobileMenu)} ref={hamburgerRef}>
                <FaBars />
            </div>

            <ul className={`${styles.mobileNavOverlay} ${showMobileMenu ? styles.active : ''}`} ref={mobileMenuRef}>
                <li><Link to="/" className={styles.navLink} onClick={handleLinkClick}><FaHome className={styles.navIcon} />{texts.navbar.home[language]}</Link></li>
                <li><Link to="/services" className={styles.navLink} onClick={handleLinkClick}><FaTools className={styles.navIcon} />{texts.navbar.services[language]}</Link></li>
                <li><Link to="/about-us" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.aboutUs[language]}</Link></li>
                <li><Link to="/community" className={styles.navLink} onClick={handleLinkClick}><FaInfoCircle className={styles.navIcon} />{texts.navbar.community[language]}</Link></li>
                <li><Link to="/contact" className={styles.navLink} onClick={handleLinkClick}><FaEnvelope className={styles.navIcon} />{texts.navbar.contact[language]}</Link></li>

                <li className={styles.mobileSettingItem} onClick={handleThemeClick}>
                    {theme === 'light' ? (
                        <FaMoon className={styles.dropdownItemIcon} />
                    ) : (
                        <FaSun className={styles.dropdownItemIcon} />
                    )}
                    {theme === 'light' ? texts.navbar.settings.darkMode[language] : texts.navbar.settings.lightMode[language]}
                </li>
                {/* ✨ INICIO: MENÚ DESPLEGABLE DE IDIOMAS PARA MÓVIL */}
                <li className={styles.dropdownItemLanguageMobile} onClick={handleLanguageToggleClick}>
                    <FaGlobe className={styles.dropdownItemIcon} />
                    {texts.navbar.settings.language[language]}
                    {showLanguageDropdown && (
                        <ul className={styles.languageDropdownMenuMobile} ref={languageDropdownRef}>
                            <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('es'); }}>
                                <img src={ArgentinaFlag} alt="Español" className={styles.flagIcon} /> Español
                            </li>
                            <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('en'); }}>
                                <img src={USFlag} alt="English" className={styles.flagIcon} /> English
                            </li>
                            <li onClick={(e) => { e.stopPropagation(); handleLanguageChange('pt'); }}>
                                <img src={BrasilFlag} alt="Português" className={styles.flagIcon} /> Português
                            </li>
                        </ul>
                    )}
                </li>
                {/* ✨ FIN: MENÚ DESPLEGABLE DE IDIOMAS PARA MÓVIL */}
                <li className={styles.mobileSettingItem} onClick={handleEmployeeLoginClick}>
                    <FaUserTie className={styles.dropdownItemIcon} />
                    {texts.navbar.settings.employeeAccess[language]}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;