import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Your regular Navbar
import NavbarLateral from './components/Navbar/NavbarLateral'; // Your lateral Navbar
import Footer from './components/Footer/Footer';
import './MainLayout.module.css'; // Assuming you'll create this for layout styles

const MainLayout = ({ language, toggleLanguage, theme, toggleTheme, isIntroAnimationActive, children }) => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const isEmployeeDashboard = location.pathname === '/employee-access-dashboard';

    // Placeholder for userRole and loggedInUserEmail
    // In a real app, these would come from your authentication context or global state
    // For now, setting a dummy admin user
    const userRole = 'Admin';
    const loggedInUserEmail = 'admin@greenlimetech.com';

    return (
        <div className={`main-layout-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
            {isEmployeeDashboard ? (
                // Render NavbarLateral only on the dashboard route
                <NavbarLateral
                    language={language}
                    toggleLanguage={toggleLanguage}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    userRole={userRole}
                    loggedInUserEmail={loggedInUserEmail}
                    isSidebarOpen={isSidebarOpen}
                />
            ) : (
                // Render regular Navbar on other routes
                <Navbar
                    language={language}
                    toggleLanguage={toggleLanguage}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isIntroAnimationActive={isIntroAnimationActive}
                />
            )}

            <main className={`main-content-area ${isEmployeeDashboard && !isSidebarOpen ? 'content-full-width' : ''}`}>
                {/* Clone children to inject props like isSidebarOpen and toggleSidebar */}
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            language,
                            theme,
                            isSidebarOpen, // Pass sidebar state
                            toggleSidebar, // Pass toggle function
                            userRole,
                            loggedInUserEmail
                        });
                    }
                    return child;
                })}
            </main>

            {!isEmployeeDashboard && ( // Only show Footer on non-dashboard pages
                <Footer language={language} />
            )}
        </div>
    );
};

export default MainLayout;