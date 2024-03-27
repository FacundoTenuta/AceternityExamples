import { FC } from 'react';
import { motion } from 'framer-motion';

interface ProgressProps {
    curIndex: number;
    length: number;
}

export const Progress: FC<ProgressProps> = ({ curIndex, length }) => {
    return (
        <>
            <div className='flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50'>
                <div
                    style={{
                        width:
                            (((curIndex + 1) / length) * 100).toString() + '%',
                    }}
                    className={`h-[1px] rounded-full bg-yellow-400 bg-opacity-50`}
                ></div>
            </div>
            <span
                key={curIndex}
                style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    key={curIndex}
                    transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                    }}
                    className='flex items-center text-4xl font-medium'
                >
                    0{curIndex + 1}
                </motion.div>
            </span>
        </>
    );
};
