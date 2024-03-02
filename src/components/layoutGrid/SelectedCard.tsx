import { Card } from './types';
import { motion } from 'framer-motion';

export const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className='relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl'>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className='absolute inset-0 z-10 h-full w-full bg-black opacity-60'
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className='relative z-[70] px-8 pb-4'
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
