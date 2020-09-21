import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header/header';
import Footer from './footer/footer';
import Navigation from 'components/Navigation/Navigation';

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
