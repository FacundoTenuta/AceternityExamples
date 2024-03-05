'use client';

import { motion, useMotionTemplate, useTransform } from 'framer-motion';
import { useBoundedScroll } from './useBoundedScroll';

export default function AnimatedStickyHeader() {
    let { scrollYBoundedProgress } = useBoundedScroll(400);
    let scrollYBoundedProgressDelayed = useTransform(
        scrollYBoundedProgress,
        [0, 0.75, 1],
        [0, 0, 1]
    );

    return (
        <div className='mx-auto flex w-full max-w-3xl flex-1 overflow-hidden bg-white text-slate-600'>
            <div className='z-0 flex-1 overflow-y-scroll'>
                <motion.header
                    style={{
                        height: useTransform(
                            scrollYBoundedProgressDelayed,
                            [0, 1],
                            [80, 50]
                        ),
                        backgroundColor: useMotionTemplate`rgb(255 255 255 / ${useTransform(
                            scrollYBoundedProgressDelayed,
                            [0, 1],
                            [1, 0.1]
                        )})`,
                    }}
                    className='fixed inset-x-0 flex h-20 shadow backdrop-blur-md'
                >
                    <div className='mx-auto flex w-full max-w-3xl items-center justify-between px-8'>
                        <motion.p
                            style={{
                                scale: useTransform(
                                    scrollYBoundedProgressDelayed,
                                    [0, 1],
                                    [1, 0.9]
                                ),
                            }}
                            className='flex origin-left items-center text-xl font-semibold uppercase'
                        >
                            <span>Logo</span>
                            <span className='ml-2 text-slate-400'>Company</span>
                        </motion.p>
                        <motion.nav
                            style={{
                                opacity: useTransform(
                                    scrollYBoundedProgressDelayed,
                                    [0, 1],
                                    [1, 0]
                                ),
                            }}
                            className='flex space-x-4 text-sm font-medium text-slate-400'
                        >
                            <a href='#'>Home</a>
                            <a href='#'>About Us</a>
                            <a href='#'>Services</a>
                        </motion.nav>
                    </div>
                </motion.header>

                <main className='px-8 pt-28'>
                    <h1 className='h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold' />
                    <div className='mt-8 space-y-6'>
                        {Array.from(Array(2).keys()).map((i) => (
                            <div key={i} className='space-y-2 text-sm'>
                                <p className='h-4 w-5/6 rounded bg-slate-200' />
                                <p className='h-4 rounded bg-slate-200' />
                                <p className='h-4 w-4/6 rounded bg-slate-200' />
                            </div>
                        ))}

                        <div className='h-64 rounded bg-slate-200'></div>

                        {Array.from(Array(90).keys()).map((i) => (
                            <div key={i} className='space-y-2 text-sm'>
                                <p className='h-4 w-5/6 rounded bg-slate-200' />
                                <p className='h-4 rounded bg-slate-200' />
                                <p className='h-4 w-4/6 rounded bg-slate-200' />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
