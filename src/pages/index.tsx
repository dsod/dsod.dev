import React, { Suspense } from 'react';

import Layout from '../layout/Layout';
import SEO from '../components/SEO';
import '../styles/index.scss';
const About = React.lazy(() => import('../components/About'));
const Experience = React.lazy(() => import('../components/Experience'));
const Skills = React.lazy(() => import('../components/Skills'));
const Projects = React.lazy(() => import('../components/Projects'));

const IndexPage = () => {
    const isSSR = typeof window === 'undefined';
    return (
        <Layout>
            <SEO title='Daniel Söderling' />
            {!isSSR && (
                <Suspense fallback={<div>Loading...</div>}>
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                </Suspense>
            )}
        </Layout>
    );
};

export default IndexPage;
