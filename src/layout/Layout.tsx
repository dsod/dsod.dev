import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => {


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
