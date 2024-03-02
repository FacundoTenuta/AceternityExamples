import { useState } from 'react';
import { Card } from './types';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <Image
            src={card.thumbnail}
            height='500'
            width='500'
            onLoad={() => setLoaded(true)}
            className={cn(
                'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
                loaded ? 'blur-none' : 'blur-md'
            )}
            alt='thumbnail'
        />
    );
};
