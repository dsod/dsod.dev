import { useOnScroll } from 'hooks/useOnScroll';
import React, { useRef } from 'react';

const Progressbar: React.FC = () => {
    const progress = useRef<HTMLDivElement>(null);

    useOnScroll(
        () => {
            const position = document.body.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const currentProgress = Math.round(
                100 * (1 - (position.bottom - viewportHeight) / (position.height - viewportHeight))
            );
            progress.current!.style.height = `${currentProgress}%`;
        },
        [],
        40
    );
    return (
        <div className='progressbar'>
            <div ref={progress} className='progressbar-progress'></div>
        </div>
    );
};

export default Progressbar;
