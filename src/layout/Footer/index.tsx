import React from 'react';
import Icon from 'components/Images/Icon';

const Footer = () => {
    return (
        <footer id='footer' className='container-fluid'>
            <div className='row mb-3'>
                <div className='d-flex align-items-center justify-content-center'>
                    <Icon
                        src='external/linkedin-icon.svg'
                        href='https://www.linkedin.com/in/daniel-s%C3%B6derling-333610121/'
                    />
                    <Icon src='external/github-icon.svg' href='https://github.com/dsod' />
                </div>
            </div>
            <div className='row justify-content-center'>
                <p>
                    © {new Date().getFullYear()},{` `}
                    <a href='https://dsod.dev'>Daniel Söderling</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
