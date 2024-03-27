import { FC } from 'react';
import { SliderCard } from './SliderCard';
import { Data } from './types';

interface SlidesProps {
    data: Data[];
}

export const Slides: FC<SlidesProps> = ({ data }) => {
    return (
        <div className='flex w-full gap-6'>
            {data.map((data) => {
                return <SliderCard key={data.img} data={data} />;
            })}
        </div>
    );
};
