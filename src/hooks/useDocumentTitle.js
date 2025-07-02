import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
    const { pathname } = useLocation();

    const getPageTitle = (path) => {
        switch (path) {
            case '/':
                return 'Home';
            case '/about':
                return 'About Us';
            case '/faq':
                return 'FAQ';
            default:
                return 'Page Not Found';
        }
    };

    useEffect(() => {
        const pageTitle = getPageTitle(pathname);
        document.title = `${pageTitle} | Making Easy Money`;
    }, [pathname]);
};

export default useDocumentTitle;
