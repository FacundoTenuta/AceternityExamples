import { StaticImageData } from 'next/image';

export type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: StaticImageData;
};
