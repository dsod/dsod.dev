import { useLayoutEffect, useRef } from 'react';

type miliseconds = number;
type UseScrollPositionType = (effect: Function, dependencies: any[], wait: miliseconds) => void;

const useOnScroll: UseScrollPositionType = (effect, dependencies, wait?) => {
    const runOnScroll = () => {
        effect();
        timerId.current = null;
    };

    let timerId = useRef<number | null>();
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (!timerId.current) {
                timerId.current = setTimeout(runOnScroll, wait);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => (
            window.removeEventListener('scroll', handleScroll), clearTimeout(timerId.current)
        );
    }, dependencies);
};
export { useOnScroll };
