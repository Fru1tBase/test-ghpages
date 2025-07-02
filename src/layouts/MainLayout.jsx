import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useDocumentTitle from '../hooks/useDocumentTitle';

const MainLayout = () => {
    useDocumentTitle();

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
