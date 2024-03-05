import { useEffect } from 'react';
import { useMotionValue, useScroll, useTransform } from 'framer-motion';

const clamp = (number: number, min: number, max: number) =>
    Math.min(Math.max(number, min), max);

export const useBoundedScroll = (threshold: number) => {
    let { scrollY } = useScroll();
    let scrollYBounded = useMotionValue(0);
    let scrollYBoundedProgress = useTransform(
        scrollYBounded,
        [0, threshold],
        [0, 1]
    );

    useEffect(() => {
        return scrollY.on('change', (current) => {
            let previous = scrollY.getPrevious();
            let diff = previous !== undefined ? current - previous : 0;
            let newScrollYBounded = scrollYBounded.get() + diff;

            scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
        });
    }, [threshold, scrollY, scrollYBounded]);

    return { scrollYBounded, scrollYBoundedProgress };
};
