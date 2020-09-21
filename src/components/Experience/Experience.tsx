import React from 'react';
import SectionHeader from '../sectionHeader';
import Timeline from './Timeline/Timeline';

const Experience = () => (
    <section id='experience' className='container'>
        <div className='row justify-content-center'>
            <div className='col-7 col-md-6 col-lg-5'>
                <SectionHeader section='Experience' />

                <Timeline />
            </div>
        </div>
    </section>
);

export default Experience;
