import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import Timeline from './Timeline';

const Experience = () => (
    <section id='experience' className='container'>
        <div className='row justify-content-center'>
            <div className='col-8 col-md-7 col-lg-6'>
                <SectionHeader section='Experience' />

                <Timeline />
            </div>
        </div>
    </section>
);

export default Experience;
