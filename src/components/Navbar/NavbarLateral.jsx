import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    FaUserCircle, FaCog, FaMoon, FaGlobe, FaChevronDown, FaChevronUp, FaSignOutAlt,
    FaTicketAlt, FaChartBar, FaUsers, FaSun // Added FaSun for light mode icon
} from 'react-icons/fa'; // Added icons

import styles from './NavbarLateral.module.css'; // Import CSS Module
import texts from '../../data/texts'; // Assuming texts.js is in data folder

// Placeholder for user data (in a real app, this would come from auth context)
const dummyUserProfile = {
    name: 'Nombre de Empleado', // Will be dynamic
    email: 'tecnico1@greenlimetech.com', // Will be dynamic
    avatar: 'https://via.placeholder.com/150/28a745/FFFFFF?text=GL' // Placeholder image
};

const NavbarLateral = ({ language, toggleLanguage, theme, toggleTheme, userRole, loggedInUserEmail, isSidebarOpen }) => {
    const navigate = useNavigate();
    const [showConfigOptions, setShowConfigOptions] = useState(false);
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);
    const [userProfile, setUserProfile] = useState(dummyUserProfile); // State for user profile

    useEffect(() => {
        // In a real application, you'd fetch the user's name and image from your backend
        // or from authentication context based on loggedInUserEmail
        const employeeData = texts.employeeLogin.dummyEmployees.find(emp => emp.email === loggedInUserEmail);
        if (employeeData) {
            setUserProfile(prevProfile => ({
                ...prevProfile,
                name: employeeData.firstName + ' ' + employeeData.lastName,
                email: employeeData.email,
                // You could add avatar logic here if employees have avatars
            }));
        }
    }, [loggedInUserEmail, texts.employeeLogin.dummyEmployees]);


    const handleLanguageChange = (langCode) => {
        toggleLanguage(langCode);
        setShowLanguageOptions(false); // Close dropdown after selection
    };

    const handleLogout = async () => {
        const result = await Swal.fire({
            icon: 'warning',
            title: texts.navbarLateral.logoutConfirmTitle[language],
            text: texts.navbarLateral.logoutConfirmMessage[language],
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#dc3545',
            confirmButtonText: texts.navbarLateral.logoutConfirmButton[language],
            cancelButtonText: texts.navbarLateral.logoutCancelButton[language],
            customClass: {
                popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
            }
        });

        if (result.isConfirmed) {
            // Simulate logout action
            // In a real app, you would clear authentication tokens/sessions
            localStorage.removeItem('loggedInUserEmail'); // Example for dummy login
            localStorage.removeItem('userRole'); // Example for dummy role

            await Swal.fire({
                icon: 'success',
                title: texts.navbarLateral.logoutSuccessTitle[language],
                text: texts.navbarLateral.logoutSuccessMessage[language],
                customClass: {
                    popup: theme === 'dark' ? 'dark-mode-swal' : 'light-mode-swal',
                }
            });
            navigate('/employee-login'); // Redirect to login page
        }
    };

    return (
        <div className={`${styles.navbarLateral} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme} ${!isSidebarOpen ? styles.closed : ''}`}>
            <div className={styles.profileSection}>
                <img src={userProfile.avatar} alt="User Avatar" className={styles.profileAvatar} />
                {isSidebarOpen && (
                    <div className={styles.profileInfo}>
                        <span className={styles.profileName}>{userProfile.name}</span>
                        <span className={styles.profileRole}>{userRole}</span>
                    </div>
                )}
            </div>

            <ul className={styles.menuList}>
                <li>
                    <button className={styles.menuItemButton} onClick={() => navigate('/employee-access-dashboard')}>
                        <FaTicketAlt className={styles.menuIcon} />
                        {isSidebarOpen && <span>{texts.navbarLateral.tickets[language]}</span>}
                    </button>
                </li>
                {userRole === 'Admin' && (
                    <li>
                        <button className={styles.menuItemButton} onClick={() => console.log('Navigate to Reports')}>
                            <FaChartBar className={styles.menuIcon} />
                            {isSidebarOpen && <span>{texts.navbarLateral.reports[language]}</span>}
                        </button>
                    </li>
                )}
                {userRole === 'Admin' && (
                    <li>
                        <button className={styles.menuItemButton} onClick={() => console.log('Navigate to Users')}>
                            <FaUsers className={styles.menuIcon} />
                            {isSidebarOpen && <span>{texts.navbarLateral.users[language]}</span>}
                        </button>
                    </li>
                )}
                <li>
                    <button className={styles.menuItemButton} onClick={() => setShowConfigOptions(prev => !prev)}>
                        <FaCog className={styles.menuIcon} />
                        {isSidebarOpen && <span>{texts.navbarLateral.settings[language]}</span>}
                        {isSidebarOpen && (showConfigOptions ? <FaChevronUp className={styles.dropdownArrow} /> : <FaChevronDown className={styles.dropdownArrow} />)}
                    </button>
                    {showConfigOptions && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <button className={styles.dropdownItemButton} onClick={toggleTheme}>
                                    {theme === 'dark' ? <FaSun className={styles.dropdownItemIcon} /> : <FaMoon className={styles.dropdownItemIcon} />}
                                    <span>{theme === 'dark' ? texts.navbarLateral.lightMode[language] : texts.navbarLateral.darkMode[language]}</span>
                                </button>
                            </li>
                            <li>
                                <button className={styles.dropdownItemButton} onClick={() => setShowLanguageOptions(prev => !prev)}>
                                    <FaGlobe className={styles.dropdownItemIcon} />
                                    <span>{texts.navbarLateral.language[language]}</span>
                                    {showLanguageOptions ? <FaChevronUp className={styles.subDropdownIcon} /> : <FaChevronDown className={styles.subDropdownIcon} />}
                                </button>
                                {showLanguageOptions && (
                                    <ul className={styles.subDropdownMenu}>
                                        <li><button className={styles.subDropdownItemButton} onClick={() => handleLanguageChange('es')}>Español</button></li>
                                        <li><button className={styles.subDropdownItemButton} onClick={() => handleLanguageChange('en')}>English</button></li>
                                        <li><button className={styles.subDropdownItemButton} onClick={() => handleLanguageChange('pt')}>Português</button></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            <button className={styles.logoutButton} onClick={handleLogout}>
                <FaSignOutAlt className={styles.logoutIcon} />
                {isSidebarOpen && <span>{texts.navbarLateral.logout[language]}</span>}
            </button>
        </div>
    );
};

export default NavbarLateral;