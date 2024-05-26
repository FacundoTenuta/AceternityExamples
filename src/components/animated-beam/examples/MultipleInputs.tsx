'use client';

import { useRef } from 'react';
import { Circle } from '../Circle';
import { Icons } from '@/components/icons/Icons';
import { AnimatedBeam } from '../AnimatedBeam';

export const MultipleInputs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className='bg-background relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg p-10'
            ref={containerRef}
        >
            <div className='flex h-full w-full flex-row items-stretch justify-between gap-10'>
                <div className='flex flex-col justify-center gap-2'>
                    <Circle ref={div1Ref}>
                        <Icons.GoogleDrive className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.GoogleDocs className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.WhatsApp className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.Messenger className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.Notion className='h-6 w-6' />
                    </Circle>
                </div>
                <div className='flex flex-col justify-center'>
                    <Circle ref={div6Ref} className='h-16 w-16'>
                        <Icons.OpenAi className='h-6 w-6' />
                    </Circle>
                </div>
                <div className='flex flex-col justify-center'>
                    <Circle ref={div7Ref}>
                        <Icons.User className='text-black' />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
            />
        </div>
    );
};
