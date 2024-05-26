'use client';

import { useRef } from 'react';
import { Circle } from '../Circle';
import { Icons } from '@/components/icons/Icons';
import { AnimatedBeam } from '../AnimatedBeam';

export const BiDirectional = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className='bg-background relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg p-10'
            ref={containerRef}
        >
            <div className='flex h-full w-full flex-col items-stretch justify-between gap-10'>
                <div className='flex flex-row justify-between'>
                    <Circle ref={div1Ref}>
                        <Icons.User className='text-black' />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.OpenAi className='h-6 w-6' />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                startYOffset={10}
                endYOffset={10}
                curvature={-20}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                reverse
                startYOffset={-10}
                endYOffset={-10}
                curvature={20}
            />
        </div>
    );
};
