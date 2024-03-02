import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
    words,
    className,
    repeat,
    speed,
}: {
    words: string;
    className?: string;
    repeat?: boolean;
    speed?: number;
}) => {
    const [animationKey, setAnimationKey] = useState(0);
    let wordsArray = words.split(' ');

    useEffect(() => {
        if (repeat) {
            const interval = setInterval(
                () => {
                    setAnimationKey((prevKey) => prevKey + 1);
                },
                (speed || 0.1) * 1000 * wordsArray.length + 2000
            ); // Adding extra time to account for delays
            return () => clearInterval(interval);
        }
    }, [repeat]);

    const renderWords = () => {
        return (
            <motion.div key={animationKey}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className='text-black opacity-0 dark:text-white'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: speed !== 0 ? idx * (speed || 0.1) : 0,
                            }}
                        >
                            {word}{' '}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('font-bold', className)}>
            <div className='mt-4'>
                <div className=' text-2xl leading-snug tracking-wide text-black dark:text-white'>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
