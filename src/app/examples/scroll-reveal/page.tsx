'use client';
import React from 'react';
import { StickyScroll } from '@/components/scrollReveal/ScrollReveal';
import Image from 'next/image';

const content = [
    {
        title: 'Collaborative Editing',
        description:
            'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
        content: (
            <Image
                src='/assets/parallax1.avif'
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='collaborative editing demo'
            />
        ),
    },
    {
        title: 'Real time changes',
        description:
            'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
        content: (
            <div className='flex h-full  w-full items-center justify-center text-white'>
                <Image
                    src='/assets/parallax2.avif'
                    width={300}
                    height={300}
                    className='h-full w-full object-cover'
                    alt='real time changes demo'
                />
            </div>
        ),
    },
    {
        title: 'Version control',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <Image
                src='/assets/parallax3.avif'
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='version control demo'
            />
        ),
    },
    {
        title: 'Running out of content',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <Image
                src='/assets/parallax4.avif'
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='version control demo'
            />
        ),
    },
];
const StickyScrollRevealDemo = () => {
    return (
        <div className='p-10'>
            <StickyScroll content={content} />
        </div>
    );
};

export default StickyScrollRevealDemo;
