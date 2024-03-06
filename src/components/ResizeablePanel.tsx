import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useMeasure } from '@uidotdev/usehooks';

type ResizeablePanelProps = {
    wrapperClassName?: string;
} & React.PropsWithChildren<HTMLMotionProps<'div'>>;
const ResizeablePanel = ({
    children,
    wrapperClassName,
    ...rest
}: ResizeablePanelProps) => {
    const [ref, { height }] = useMeasure();

    return (
        <motion.div
            initial={{ height: 'auto' }}
            animate={{ height: height || 'auto' }}
            {...rest}
        >
            <div ref={ref} className={wrapperClassName}>
                {children}
            </div>
        </motion.div>
    );
};

export default ResizeablePanel;
