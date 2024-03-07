'use client';
import StaggeredReveal from '@/components/staggeredReveal/StaggeredReveal';
import { useEffect, useRef } from 'react';

const StaggeredRevealDemo = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            ref.current!.scrollBy(0, 1); // Cambia el valor de '1' para ajustar la velocidad del scroll
        }, 10); // Cambia el valor de '10' para ajustar la frecuencia del scroll

        return () => {
            clearInterval(scrollInterval);
        };
    }, [ref]); // El efecto solo se ejecutará una vez al montar el componente
    return (
        <div
            ref={ref}
            className='flex h-[30rem] justify-center overflow-y-scroll rounded-md bg-slate-600 shadow-inner shadow-slate-600'
        >
            <div className='relative flex h-fit max-w-2xl items-start p-14'>
                <StaggeredReveal />
            </div>
        </div>
    );
};

export default StaggeredRevealDemo;
