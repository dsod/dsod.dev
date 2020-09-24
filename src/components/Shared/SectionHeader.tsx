import React from 'react';

type SectionHeaderProps = {
    section: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ section }) => (
    <h2 className='section-header mb-3 pb-2'>{section}</h2>
);

export default SectionHeader;
