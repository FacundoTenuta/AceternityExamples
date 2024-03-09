import { cn } from '@/utils/cn';
import { MotionValue, motion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FC, useRef } from 'react';

interface AppIconProps {
    mouseX: MotionValue;
    className?: string;
    image?: string;
}

export const AppIcon: FC<AppIconProps> = ({ mouseX, className, image }) => {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    let width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className={cn(
                'aspect-square w-10 rounded-full bg-gray-400',
                className
            )}
        >
            {image && (
                <motion.img
                    src={image}
                    className='h-full w-full'
                    alt='Finder'
                />
            )}
        </motion.div>
    );
};
