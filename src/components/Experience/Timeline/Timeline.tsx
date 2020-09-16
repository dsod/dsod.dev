import React, { createRef, useLayoutEffect, useMemo, useRef } from 'react';
import Experiences from 'content/experiences.json';
import ListIcon from 'images/icons/list-item.svg';
import { useElementMiddleOfViewport } from 'hooks/useElementMiddleOfViewport';

type ElementActiveStatus = {
    currentlyMiddleOfViewport: boolean;
    previouslyMiddleOfViewport: boolean;
};

type Section = (section: React.RefObject<HTMLDivElement>, index: number) => void;

const Timeline: React.FC = () => {
    const sectionElements: React.RefObject<HTMLDivElement>[] = useMemo(
        () => Array.from({ length: Experiences.length }).map(() => createRef()),
        []
    );
    const timelineElement: React.RefObject<HTMLDivElement> = useRef(null);

    useLayoutEffect(() => {
        sectionElements.map((section, index) => {
            listenForActiveSection(section, index);
        });
    });

    const listenForActiveSection: Section = (section, index) => {
        useElementMiddleOfViewport(
            ({ currentlyMiddleOfViewport, previouslyMiddleOfViewport }: ElementActiveStatus) => {
                if (currentlyMiddleOfViewport === previouslyMiddleOfViewport) return;
                handleActiveSection(section, index);
            },
            section.current!,
            0
        );
    };

    const handleActiveSection: Section = (section, index) => {
        section.current?.classList.toggle('active');

        timelineElement.current?.classList.toggle(`active-${index + 1}`);
    };

    return (
        <div id='timeline' className='timeline-wrapper'>
            {Experiences.map((data, index) => {
                let style: string;
                index % 2 === 0
                    ? (style = 'timeline-section timeline-section-right')
                    : (style = 'timeline-section timeline-section-left');
                return (
                    <div key={`experience_${index}`} className={style} ref={sectionElements[index]}>
                        <h5>{data.role}</h5>
                        <ul className='learnings'>
                            {data.learnings.map((learning, index) => {
                                return (
                                    <li key={`list_item_${index}`}>
                                        <ListIcon />
                                        {learning}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
            <div className={`timeline timeline-height-${Experiences.length}`}></div>
            <div className={`timeline-active`} ref={timelineElement}>
                <div className='center'></div>
            </div>
        </div>
    );
};

export default Timeline;
