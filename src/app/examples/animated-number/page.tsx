'use client';

import { AnimatedNumber } from '@/components/animatedNumber/AnimatedNumber';
import { useState } from 'react';

// client-component.tsx
export default function Page() {
    let [value, setValue] = useState(1000);

    return (
        <div className='flex items-center justify-center gap-28 text-6xl'>
            <button
                className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                onClick={() => setValue(value - 100)}
            >
                -100
            </button>

            <AnimatedNumber classname='text-white' value={value} />

            <button
                className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                onClick={() => setValue(value + 100)}
            >
                +100
            </button>
        </div>
    );
}
