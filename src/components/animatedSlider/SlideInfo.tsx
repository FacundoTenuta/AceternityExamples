import { FC } from 'react';
import { motion } from 'framer-motion';
import { CurrentSlideData, Data } from './types';
import { OtherInfo } from './OtherInfo';

interface SlideInfoProps {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
}

export const SlideInfo: FC<SlideInfoProps> = ({
    transitionData,
    currentSlideData,
}) => {
    return (
        <>
            <motion.span
                layout
                className=' mb-2 h-1 w-5 rounded-full bg-white'
            />
            <OtherInfo
                data={transitionData ? transitionData : currentSlideData.data}
            />
            <motion.div layout className='mt-5 flex items-center gap-3'>
                <button className='flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs transition duration-300 ease-in-out hover:opacity-80'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
                <button className='w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 ease-in-out hover:bg-white hover:text-black'>
                    DISCOVER LOCATION
                </button>
            </motion.div>
        </>
    );
};
