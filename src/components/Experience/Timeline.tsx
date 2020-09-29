import React, { createRef, useMemo, useRef, useState } from 'react';
import ExperienceItems from 'content/experiences.json';
import Icon from 'components/Images/Icon';
import { useOnScroll } from 'hooks/useOnScroll';

const Timeline: React.FC = () => {
    const timelineWrapper = useRef<HTMLDivElement>(null);
    const sectionElements: React.RefObject<HTMLDivElement>[] = useMemo(
        () => Array.from({ length: ExperienceItems.length }).map(() => createRef()),
        []
    );
    const [activeSection, setActiveSection] = useState(-1);

    useOnScroll(
        () => {
            const animationBreakpoint = window.innerHeight / 3.5;
            const timelineWrapperPosition = timelineWrapper.current!.getBoundingClientRect();
            if (
                timelineWrapperPosition.top > animationBreakpoint ||
                timelineWrapperPosition.bottom < animationBreakpoint
            ) {
                if (activeSection != -1) setActiveSection(-1);
                return;
            }
            sectionElements.map((section, index) => {
                const sectionPosition = section.current?.getBoundingClientRect();
                const sectionMiddleOfViewport =
                    sectionPosition!.top <= animationBreakpoint &&
                    sectionPosition!.bottom >= animationBreakpoint;

                if (sectionMiddleOfViewport && activeSection != index) {
                    setActiveSection(index);
                }
            });
        },
        [activeSection],
        40
    );

    return (
        <div id='timeline' className='timeline-wrapper' ref={timelineWrapper}>
            {ExperienceItems.map((data, index) => {
                let style: string;
                index % 2 === 0
                    ? (style = `timeline-section timeline-section-right ${
                          index === activeSection ? 'active' : ''
                      }`)
                    : (style = `timeline-section timeline-section-left ${
                          index === activeSection ? 'active' : ''
                      }`);

                return (
                    <div key={`experience_${index}`} className={style} ref={sectionElements[index]}>
                        <div className='timeline-role'>
                            <h5>{data.role}</h5>
                            <p>{`${data.company} - ${data.duration}`}</p>
                        </div>
                        <ul className='timeline-learnings'>
                            {data.learnings.map((learning, index) => {
                                return (
                                    <li key={`list_item_${index}`}>
                                        <Icon src='list-item.svg' />
                                        {learning}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
            <div className={`timeline timeline-height-${ExperienceItems.length}`}>
                <div className='timeline-start'>2020</div>
                <div className='timeline-stop'>2013</div>
            </div>

            <div
                className={`timeline-active ${
                    activeSection >= 0 ? `active-${activeSection + 1}` : ''
                }`}
            >
                <div className='center'></div>
            </div>
        </div>
    );
};

export default Timeline;
