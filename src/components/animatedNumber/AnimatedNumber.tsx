'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { FC, useEffect } from 'react';

interface AnimatedNumberProps {
    value: number;
    classname?: string;
}

export const AnimatedNumber: FC<AnimatedNumberProps> = ({
    value,
    classname,
}) => {
    const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span className={classname}>{display}</motion.span>;
};
