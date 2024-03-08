'use client';
import StaggeredReveal from '@/components/staggeredReveal/StaggeredReveal';
import { useEffect, useRef } from 'react';

const StaggeredRevealDemo = () => {
    const ref = useRef<HTMLDivElement>(null);

    const scrollFunction = () => {
        if (ref.current) {
            ref.current.scrollBy(0, 1); // Cambia el valor de '1' para ajustar la velocidad del scroll
        }
        requestAnimationFrame(scrollFunction);
    };

    useEffect(() => {
        setTimeout(() => {
            scrollFunction();
        }, 5000);
    }, []); // El efecto solo se ejecutará una vez al montar el componente

    return (
        <div
            ref={ref}
            className='no-scrollbar flex h-[30rem] justify-center overflow-y-scroll rounded-md bg-slate-600 shadow-inner shadow-slate-600'
        >
            <div className='relative flex h-fit max-w-2xl items-start p-14'>
                <StaggeredReveal />
            </div>
        </div>
    );
};

export default StaggeredRevealDemo;
