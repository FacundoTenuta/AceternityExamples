import { FC } from 'react';
import { SliderButton } from './SliderButton';
import { CurrentSlideData, Data } from './types';
import { Progress } from './Progress';

interface ControlsProps {
    currentSlideData: CurrentSlideData;
    sliderData: Data[];
    data: Data[];
    transitionData: Data;
    handleData: React.Dispatch<React.SetStateAction<Data[]>>;
    handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
    handleCurrentSlideData: React.Dispatch<
        React.SetStateAction<CurrentSlideData>
    >;
    initData: Data;
}

export const Controls: FC<ControlsProps> = ({
    sliderData,
    data,
    transitionData,
    currentSlideData,
    handleData,
    handleTransitionData,
    handleCurrentSlideData,
    initData,
}) => {
    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initData,
            ...prevData.slice(0, prevData.length - 1),
        ]);
        handleCurrentSlideData({
            data: transitionData ? transitionData : sliderData[0],
            index: sliderData.findIndex(
                (ele) => ele.img === data[data.length - 1].img
            ),
        });
        handleTransitionData(data[data.length - 1]);
    };

    const handleNext = () => {
        handleData((prev) => prev.slice(1));
        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: sliderData.findIndex((ele) => ele.img === data[0].img),
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initData,
            ]);
        }, 500);
    };

    return (
        <div className='flex items-center gap-3 px-0 py-3 md:px-1 md:py-5'>
            <SliderButton handleClick={handlePrev}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6'
                >
                    <path
                        fillRule='evenodd'
                        d='M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z'
                        clipRule='evenodd'
                    />
                </svg>
            </SliderButton>
            <SliderButton handleClick={handleNext}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6'
                >
                    <path
                        fillRule='evenodd'
                        d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                        clipRule='evenodd'
                    />
                </svg>
            </SliderButton>
            <Progress
                curIndex={currentSlideData.index}
                length={sliderData.length}
            />
        </div>
    );
};
