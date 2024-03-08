'use client';

import { BentoGrid } from '@/components/bento/BentoGrid';
import { BentoGridItem } from '@/components/bento/BentoGridItem';
import Image from 'next/image';
import Parallax1 from '@/public/assets/parallax1.avif';
import Parallax2 from '@/public/assets/parallax2.avif';
import Parallax3 from '@/public/assets/parallax3.avif';
import Parallax4 from '@/public/assets/parallax4.avif';
import Parallax5 from '@/public/assets/parallax5.avif';
import Parallax6 from '@/public/assets/parallax6.avif';
import { motion } from 'framer-motion';

export default function Page() {
    return (
        <div className='my-20 w-full'>
            <BentoGrid
                className='max-w-4xl'
                childrenClassName='rounded-[30px] relative transform transition-all duration-300 hover:scale-[1.01]'
                cols={3}
                rows={3}
            >
                <BentoGridItem colSpan={2}>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax1}
                        alt='Parallax 1'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>

                <BentoGridItem>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax2}
                        alt='Parallax 2'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>
                <BentoGridItem rowSpan={2}>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax3}
                        alt='Parallax 3'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>
                <BentoGridItem colSpan={2}>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax4}
                        alt='Parallax 4'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>
                <BentoGridItem>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax5}
                        alt='Parallax 5'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>
                <BentoGridItem>
                    <Image
                        className='h-full w-full object-cover'
                        src={Parallax6}
                        alt='Parallax 6'
                        placeholder='blur'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50'
                    >
                        <h1 className='text-4xl font-bold text-white'>
                            Hello World
                        </h1>
                        <span className='text-white'>This is a test</span>
                    </motion.div>
                </BentoGridItem>
            </BentoGrid>
        </div>
    );
}
