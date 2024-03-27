'use client';

import { BackgroundImage } from '@/components/animatedSlider/BackgroundImage';
import { Controls } from '@/components/animatedSlider/Controls';
import { Header } from '@/components/animatedSlider/Header';
import { SlideInfo } from '@/components/animatedSlider/SlideInfo';
import Slides from '@/components/animatedSlider/Slides';
import { CurrentSlideData, Data } from '@/components/animatedSlider/types';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const sliderData = [
    {
        img: '/assets/imageSlider7.png',
        location: 'Switzrerland Apls',
        description:
            'The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire',
        title: 'SAINT ANTÖNEN',
    },
    {
        img: '/assets/imageSlider6.png',
        title: 'The Grand Canyon',
        description:
            "The earth's geological history opens before your eyes in a mile-deep chasm",
        location: 'Arizona',
    },
    {
        img: '/assets/imageSlider3.png',
        title: 'Masai Mara',
        description:
            'Wild animals in their natural environment, luxury safari lodges',
        location: 'Kenya',
    },
    {
        img: '/assets/imageSlider4.png',
        title: 'Angkor Wat',
        description:
            'A stunning ancient jungle city with hundreds of intricately constructed temples',
        location: 'Cambodia',
    },
    {
        img: '/assets/imageSlider5.png',
        title: 'Bali',
        description:
            'Tropical beaches, volcano hikes, ancient temples, and friendly people',
        location: 'Indonesia',
    },
];

const initData = sliderData[0];

const AnimatedSliderDemo = () => {
    const [data, setData] = useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
    const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
        data: initData,
        index: 0,
    });

    return (
        <div
            className={
                'relative z-0 h-full min-h-screen w-full select-none overflow-hidden font-normal text-white antialiased'
            }
        >
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className='absolute z-20 h-full w-full'>
                    <Header />
                    <div className='flex h-full w-full grid-cols-10 flex-col md:grid'>
                        <div className='col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10'>
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className='col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10'>
                            <Slides data={data} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default AnimatedSliderDemo;
