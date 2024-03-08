import { cn } from '@/utils/cn';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

interface BlurShadowImageProps extends ImageProps {
    blurSize?: number;
}

export const BlurShadowImage: FC<BlurShadowImageProps> = ({
    blurSize = 20,
    className,
    ...props
}) => (
    <div className='relative'>
        <Image
            src={props.src}
            alt={props.alt}
            className={cn(`absolute inset-0 h-full w-full`, className)}
            style={{
                filter: `blur(${blurSize}px)`,
            }}
        />
        <Image className={cn('transform', className)} {...props} />
    </div>
);
