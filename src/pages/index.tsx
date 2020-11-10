import React from 'react';

import Layout from '../layout/Layout';
import SEO from '../components/SEO';
import '../styles/index.scss';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import StyledGlobal from 'styles/global';
import { AppProviders } from 'context';

const IndexPage = () => (
    <AppProviders>
        <Layout>
            <StyledGlobal />
            <SEO title='Daniel Söderling' />
            <About />
            <Experience />
            <Skills />
            <Projects />
        </Layout>
    </AppProviders>
);

export default IndexPage;
