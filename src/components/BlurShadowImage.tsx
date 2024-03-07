import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

interface BlurShadowImageProps extends ImageProps {
    blurSize?: number;
}

export const BlurShadowImage: FC<BlurShadowImageProps> = ({
    blurSize = 20,
    ...props
}) => (
    <div className='relative'>
        <Image
            src={props.src}
            alt={props.alt}
            className={`absolute inset-0 h-full w-full rounded-lg from-transparent`}
            style={{
                filter: `blur(${blurSize}px)`,
            }}
        />
        <Image {...props} />
    </div>
);
