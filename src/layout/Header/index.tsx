import React from 'react';
import Image from 'components/Images';

const Header = () => (
    <header id='header' className='d-flex align-items-center'>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='title col-5 col-md-4 col-lg-4'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1>Hi.</h1>
                        </div>
                        <div className='col-8'>
                            <h2>
                                I am <span className='color-accent'>Daniel!</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='lead-wrapper col-6 col-lg-4'>
                    <div className='col-lg-8'>
                        <p className='lead'>Software development is my newfound passion</p>
                    </div>
                </div>
                <div className='picture col-6 col-lg-4'>
                    <Image src='profile@2x.png' alt='Profile Image' />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
