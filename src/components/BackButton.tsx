'use client';

import { usePathname } from 'next/navigation';

export const BackButton = () => {
    const pathname = usePathname();

    if (pathname === '/') {
        return null;
    }

    return (
        <div className='fixed left-4 top-4'>
            <a
                href='/'
                className='text-2xl font-bold text-white hover:text-slate-500'
            >
                ←
            </a>
        </div>
    );
};
