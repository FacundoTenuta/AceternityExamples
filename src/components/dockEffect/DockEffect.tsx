'use client';

import { motion, useMotionValue } from 'framer-motion';
import { AppIcon } from './AppIcon';
import { FC } from 'react';

interface DockEffectProps {
    apps?: string[];
    childrensClassName?: string;
}

export const DockEffect: FC<DockEffectProps> = ({
    apps,
    childrensClassName,
}) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className='mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3'
        >
            {apps
                ? apps.map((app, i) => (
                      <AppIcon
                          className={childrensClassName}
                          key={i}
                          mouseX={mouseX}
                          image={app}
                      />
                  ))
                : Array.from(Array(8).keys()).map((i) => (
                      <AppIcon
                          className={childrensClassName}
                          mouseX={mouseX}
                          key={i}
                      />
                  ))}
        </motion.div>
    );
};
