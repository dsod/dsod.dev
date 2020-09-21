import React, { createRef, MouseEvent, useLayoutEffect, useMemo, useRef, useState } from 'react';

import NavigationItems from 'content/navigation.json';
import Progressbar from './Progressbar/Progressbar';
import NavIcon from './NavIcon/NavIcon';
import { useOnScroll } from 'hooks/useOnScroll';

type SectionPosition = {
    elementId: string,
    offsetTop: number,
    height: number
}

type SectionPositions = SectionPosition[]

const Navigation: React.FC = () => {
    const navItemElements: React.RefObject<HTMLLIElement>[] = useMemo(
        () => Array.from({ length: NavigationItems.length }).map(() => createRef()),
        []
    );

    const [activeSection, setActiveSection] = useState(0);
    const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

    const pageSections = useRef<SectionPositions>();
    const activeSectionBreakpoint = window.innerHeight * 0.2


    useLayoutEffect(() => {
        pageSections.current = NavigationItems.reduce<SectionPositions>((previousValue, section) => {
            const element = document.getElementById(section.href.split('#')[1]);
            const sectionPosition: SectionPosition = {
                elementId: section.href,
                offsetTop: element!.offsetTop,
                height: element!.scrollHeight
            }
            sectionPosition ? previousValue.push(sectionPosition) : null;
            return previousValue;
        }, [])
    }, [])

    useOnScroll(() => {
        if (!pageSections.current) return

        const currentBreakpoint = window.scrollY + activeSectionBreakpoint;
        pageSections.current.forEach((section, index) => {
            console.log(`currentBreakpoint: ${currentBreakpoint}, section: ${section.offsetTop}`)
            if (currentBreakpoint > section.offsetTop && currentBreakpoint < (section.offsetTop + section.height)) {
                setActiveSection(index)
            }

        })
        
    }, [activeSection], 40)


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
        setNavigationOpen(!navigationOpen)
    }

    return (
        <div className='navigation-wrapper'>
            <nav>
                <button className="navigation-toggle" onClick={toggleNavigation}>
                    {navigationOpen ? <NavIcon href="close-nav.svg" /> : <NavIcon href="open-nav.svg" />}
                </button>
                <div className={`navigation-collapsable ${navigationOpen ? 'active' : ''}`}>
                    <ul>
                        {NavigationItems.map((navItem, index) => {
                            return (
                                <li
                                    key={`nav-item${index}`}
                                    onClick={(event) => handleClick(event, navItem.href)}
                                    ref={navItemElements[index]}
                                    className={index === activeSection ? "active" : ""}
                                >
                                    {index != 0 ? <div className="navigation-separator"></div> : null}
                                    <NavIcon href={navItem.icon} />
                                    <a href={navItem.href}>{navItem.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            <Progressbar />
        </div>
    );
};

export default Navigation;
