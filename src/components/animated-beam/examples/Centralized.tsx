import { useRef } from 'react';
import { Circle } from '../Circle';
import { AnimatedBeam } from '../AnimatedBeam';
import { Icons } from '@/components/icons/Icons';

export const Centralized = () => {
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
            className='bg-background relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg p-10'
            ref={containerRef}
        >
            <div className='flex h-full w-full flex-col items-stretch justify-between gap-10'>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div1Ref}>
                        <Icons.GoogleDrive className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.GoogleDocs className='h-6 w-6' />
                    </Circle>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div2Ref}>
                        <Icons.Notion className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div4Ref} className='h-16 w-16'>
                        <Icons.OpenAi className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div6Ref}>
                        <Icons.Zapier className='h-6 w-6' />
                    </Circle>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <Circle ref={div3Ref}>
                        <Icons.WhatsApp className='h-6 w-6' />
                    </Circle>
                    <Circle ref={div7Ref}>
                        <Icons.Messenger className='h-6 w-6' />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                reverse
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                reverse
                endYOffset={10}
            />
        </div>
    );
};
