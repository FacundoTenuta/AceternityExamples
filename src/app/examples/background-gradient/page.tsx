'use client';
import React from 'react';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/backgroundGradient/BackgroundGradient';

const BackgroundGradientDemo = () => {
    return (
        <div>
            <BackgroundGradient className='max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900'>
                <Image
                    src='/assets/jordans.webp'
                    alt='jordans'
                    height='400'
                    width='400'
                    data-loaded='false'
                    onLoad={(event) => {
                        event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='object-contain data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                />
                <p className='mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200'>
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    The Air Jordan 4 Retro Reimagined Bred will release on
                    Saturday, February 17, 2024. Your best opportunity to get
                    these right now is by entering raffles and waiting for the
                    official releases.
                </p>
                <button className='mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800'>
                    <span>Buy now </span>
                    <span className='rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white'>
                        $100
                    </span>
                </button>
            </BackgroundGradient>
        </div>
    );
};

export default BackgroundGradientDemo;
