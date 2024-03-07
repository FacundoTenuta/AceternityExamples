'use client';

import { ParallaxScroll } from '@/components/parallaxScroll/ParallaxScroll';
import Parallax1 from '@/public/assets/parallax1.avif';
import Parallax2 from '@/public/assets/parallax2.avif';
import Parallax3 from '@/public/assets/parallax3.avif';
import Parallax4 from '@/public/assets/parallax4.avif';
import Parallax5 from '@/public/assets/parallax5.avif';
import Parallax6 from '@/public/assets/parallax6.avif';
import Parallax7 from '@/public/assets/parallax7.avif';

const images = [
    Parallax1,
    Parallax2,
    Parallax3,
    Parallax1,
    Parallax2,
    Parallax3,
    Parallax4,
    Parallax5,
    Parallax6,
    Parallax7,
    Parallax1,
    Parallax2,
    Parallax3,
    Parallax1,
    Parallax2,
    Parallax1,
    Parallax2,
    Parallax3,
    Parallax1,
    Parallax2,
    Parallax1,
    Parallax2,
    Parallax3,
    Parallax1,
    Parallax2,
];

const ParallaxScrollDemo = () => {
    return <ParallaxScroll images={images} />;
};

export default ParallaxScrollDemo;
