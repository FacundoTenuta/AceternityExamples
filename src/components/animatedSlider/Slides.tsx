import { FC } from 'react';
import { SliderCard } from './SliderCard';
import { Data } from './types';

interface SlidesProps {
    data: Data[];
    onClick?: (index: number) => void;
}

export const Slides: FC<SlidesProps> = ({ data, onClick }) => {
    return (
        <div className='flex w-full gap-6'>
            {data.map((data, index) => (
                <SliderCard
                    onClick={() => {
                        onClick && onClick(index);
                    }}
                    key={data.img}
                    data={data}
                />
            ))}
        </div>
    );
};
