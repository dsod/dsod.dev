import React, { createRef, MouseEvent, useLayoutEffect, useMemo, useRef, useState } from 'react';

import NavigationItems from 'content/navigation.json';
import Progressbar from './Progressbar';
import Icon from 'components/Images/Icon';
import { useOnScroll } from 'hooks/useOnScroll';
import CallToActionButton from 'components/Shared/CallToActionButton';

type SectionPosition = {
    elementId: string;
    offsetTop: number;
    height: number;
};

type SectionPositions = SectionPosition[];

const Navigation: React.FC = () => {
    const navItemElements: React.RefObject<HTMLLIElement>[] = useMemo(
        () => Array.from({ length: NavigationItems.length }).map(() => createRef()),
        []
    );

    const [activeSection, setActiveSection] = useState(0);
    const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

    const pageSections = useRef<SectionPositions>();
    const activeSectionBreakpoint = useRef(0);

    useLayoutEffect(() => {
        activeSectionBreakpoint.current = window.innerHeight * 0.2;
        pageSections.current = NavigationItems.reduce<SectionPositions>(
            (previousValue, section) => {
                const element = document.getElementById(section.href.split('#')[1]);
                const sectionPosition: SectionPosition = {
                    elementId: section.href,
                    offsetTop: element!.offsetTop,
                    height: element!.scrollHeight,
                };
                sectionPosition ? previousValue.push(sectionPosition) : null;
                return previousValue;
            },
            []
        );
    }, []);

    useOnScroll(
        () => {
            if (!pageSections.current) return;

            const currentBreakpoint = window.scrollY + activeSectionBreakpoint.current;
            pageSections.current.forEach((section, index) => {
                if (
                    currentBreakpoint > section.offsetTop &&
                    currentBreakpoint < section.offsetTop + section.height
                ) {
                    setActiveSection(index);
                }
            });
        },
        [activeSection],
        40
    );

    const handleClick = (event: MouseEvent, anchor: string) => {
        event.preventDefault();
        const element = document.getElementById(anchor.split('#')[1]);
        if (element) {
            element.focus({ preventScroll: true });
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
        if (navigationOpen) toggleNavigation();
    };

    const toggleNavigation = () => {
        setNavigationOpen(!navigationOpen);
    };

    return (
        <div className='navigation-wrapper'>
            <nav>
                <button className='navigation-toggle' onClick={toggleNavigation}>
                    {navigationOpen ? (
                        <Icon src='close-nav.svg' subFolder='navigation/' />
                    ) : (
                        <Icon src='open-nav.svg' subFolder='navigation/' />
                    )}
                </button>
                <div className={`navigation-collapsable ${navigationOpen ? 'active' : ''}`}>
                    <ul>
                        {NavigationItems.map((navItem, index) => {
                            return (
                                <li
                                    key={`nav-item${index}`}
                                    onClick={(event) => handleClick(event, navItem.href)}
                                    ref={navItemElements[index]}
                                    className={index === activeSection ? 'active' : ''}
                                >
                                    {index != 0 ? (
                                        <div className='navigation-separator'></div>
                                    ) : null}
                                    <Icon src={`${navItem.icon}`} subFolder='navigation/' />
                                    <a href={navItem.href}>{navItem.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            <div className='navigation-contact d-flex flex-column'>
                <CallToActionButton
                    iconSrc='phone-icon.svg'
                    iconSrcSubfolder='about/'
                    classNames='navigation-contact-button m-2'
                    toggleElement='phone'
                >
                    <div id='phone' className='navigation-contact-popover'>
                        <a href='tel:+46(0)73 390 29 25'>
                            +46&nbsp;(0)&nbsp;73&nbsp;390&nbsp;29&nbsp;25
                        </a>
                    </div>
                </CallToActionButton>
                <CallToActionButton
                    iconSrc='email-icon.svg'
                    iconSrcSubfolder='about/'
                    classNames='navigation-contact-button m-2'
                    toggleElement='email'
                >
                    <div id='email' className='navigation-contact-popover'>
                        <a href='mailto:d.soderling@live.se' className='mx-2'>
                            d.soderling@live.se
                        </a>
                    </div>
                </CallToActionButton>
            </div>
            <Progressbar />
        </div>
    );
};

export default Navigation;
