import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

interface OtherInfoProps {
    data: any;
}

export const OtherInfo: FC<OtherInfoProps> = ({ data }) => {
    return (
        <motion.div
            initial='hidden'
            animate={'visible'}
            className=' flex flex-col'
        >
            <AnimatedText
                className=' spacing overflow-hidden text-[#D5D5D6]'
                data={data?.location}
            />
            <AnimatedText
                className=' my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]'
                data={data?.title}
            />
            <AnimatedText
                className=' text-xs text-[#D5D5D6]'
                data={data?.description}
            />
        </motion.div>
    );
};
