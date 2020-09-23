import React from 'react';
import Icon from "components/Images/Icon"

const Footer = () => {
    return (
        <footer id='footer' className='container-fluid'>
            <div className='row mb-3'>
                <Icon src="linkedin-icon.svg" />
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
