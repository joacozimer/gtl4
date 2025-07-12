import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of the page on route change,
        // but ONLY if the pathname is NOT '/home'
        if (pathname !== '/home') {
            window.scrollTo(0, 0);
        }
    }, [pathname]); // Re-run effect when pathname changes

    return null; // This component doesn't render anything itself
};

export default ScrollToTop;