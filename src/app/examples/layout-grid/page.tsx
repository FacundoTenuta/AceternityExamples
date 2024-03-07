'use client';

import { LayoutGrid } from '@/components/layoutGrid/LayoutGrid';
import Parallax1 from '@/public/assets/parallax1.avif';
import Parallax2 from '@/public/assets/parallax2.avif';
import Parallax3 from '@/public/assets/parallax3.avif';
import Parallax4 from '@/public/assets/parallax4.avif';

const SkeletonOne = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-white'>House in the woods</p>
            <p className='text-base font-normal text-white'></p>
            <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
                A serene and tranquil retreat, this house in the woods offers a
                peaceful escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-white'>
                House above the clouds
            </p>
            <p className='text-base font-normal text-white'></p>
            <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
                Perched high above the world, this house offers breathtaking
                views and a unique living experience. It&apos;s a place where
                the sky meets home, and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-white'>Greens all over</p>
            <p className='text-base font-normal text-white'></p>
            <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
                A house surrounded by greenery and nature&apos;s beauty.
                It&apos;s the perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className='text-4xl font-bold text-white'>Rivers are serene</p>
            <p className='text-base font-normal text-white'></p>
            <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
                A house by the river is a place of peace and tranquility.
                It&apos;s the perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: 'md:col-span-2',
        thumbnail: Parallax1,
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail: Parallax2,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail: Parallax3,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail: Parallax4,
    },
];

const LayoutGridDemo = () => {
    return (
        <div className='h-screen w-full py-20'>
            <LayoutGrid cards={cards} />
        </div>
    );
};

export default LayoutGridDemo;
