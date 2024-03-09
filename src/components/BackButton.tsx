'use client';

import { usePathname } from 'next/navigation';

export const BackButton = () => {
    const pathname = usePathname();

    if (pathname === '/') {
        return null;
    }

    return (
        <a
            href='/'
            className='fixed left-5 top-5 z-20 flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-slate-400 bg-opacity-50 p-2 text-2xl font-bold text-white shadow-sm transition-all duration-300 hover:scale-125 hover:bg-slate-500 hover:bg-opacity-50 hover:shadow-xl'
        >
            ←
        </a>
    );
};
