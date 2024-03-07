import * as React from 'react';

import { motion } from 'framer-motion';
import { BlurShadowImage } from '../BlurShadowImage';
import { backgrounds } from './backgrounds';

export default function StaggeredReveal() {
    return (
        <div className='flex w-full flex-col items-center gap-8'>
            {backgrounds.map((person, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        amount: 0.6,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    key={person.title + index}
                    className='flex w-full flex-row items-center justify-center gap-8 p-4'
                >
                    <BlurShadowImage
                        src={person.img}
                        alt=''
                        placeholder='blur'
                        blurSize={20}
                        className='h-60 w-80 transform rounded-lg'
                    />
                    <div className='flex flex-1 flex-col'>
                        <h2 className='text-balance text-lg font-bold text-slate-100'>
                            {person.title}
                        </h2>
                        <p className='text-balance text-sm italic text-slate-300'>
                            {person.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
