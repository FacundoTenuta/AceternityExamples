import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from './Logo';

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
}: {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
    rotate: MotionValue<number>;
    translate: MotionValue<number>;
    src?: string;
}) => {
    return (
        <div className='relative [perspective:800px]'>
            <div
                style={{
                    transform:
                        'perspective(800px) rotateX(-25deg) translateZ(0px)',
                    transformOrigin: 'bottom',
                    transformStyle: 'preserve-3d',
                }}
                className='relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2'
            >
                <div
                    style={{
                        boxShadow: '0px 2px 0px 2px var(--neutral-900) inset',
                    }}
                    className='absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]'
                >
                    <span className='text-white'>
                        <Logo />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'top',
                }}
                className='absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2'
            >
                <div className='absolute inset-0 rounded-lg bg-[#272729]' />
                <Image
                    src={src as string}
                    alt='logo'
                    fill
                    placeholder='blur'
                    className='absolute inset-0 h-full w-full rounded-lg object-cover object-left-top'
                />
            </motion.div>
        </div>
    );
};
