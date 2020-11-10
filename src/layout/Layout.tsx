import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import { useTheme } from 'emotion-theming';

const Layout: React.FC = ({ children }) => {
    const theme = useTheme();
    console.log('theme', theme);

    return (
        <>
            <Navigation />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
