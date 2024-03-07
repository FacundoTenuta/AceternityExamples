'use client';
import React from 'react';
import { StickyScroll } from '@/components/scrollReveal/ScrollReveal';
import Image from 'next/image';
import Parallax1Image from '@/public/assets/parallax1.avif';
import Parallax2Image from '@/public/assets/parallax2.avif';
import Parallax3Image from '@/public/assets/parallax3.avif';
import Parallax4Image from '@/public/assets/parallax4.avif';

const content = [
    {
        title: 'Collaborative Editing',
        description:
            'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
        content: (
            <Image
                src={Parallax1Image}
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='collaborative editing demo'
                placeholder='blur'
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
                    src={Parallax2Image}
                    width={300}
                    height={300}
                    className='h-full w-full object-cover'
                    alt='real time changes demo'
                    placeholder='blur'
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
                src={Parallax3Image}
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='version control demo'
                placeholder='blur'
            />
        ),
    },
    {
        title: 'Running out of content',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <Image
                src={Parallax4Image}
                width={300}
                height={300}
                className='h-full w-full object-cover'
                alt='version control demo'
                placeholder='blur'
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
