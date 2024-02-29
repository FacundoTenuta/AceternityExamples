'use client';

import { ParallaxScroll } from '@/components/parallaxScroll/ParallaxScroll';

const images = [
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax3.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax3.avif',
	'/assets/parallax4.avif',
	'/assets/parallax5.avif',
	'/assets/parallax6.avif',
	'/assets/parallax7.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax3.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax3.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
	'/assets/parallax3.avif',
	'/assets/parallax1.avif',
	'/assets/parallax2.avif',
];

const ParallaxScrollDemo = () => {
	return <ParallaxScroll images={images} />;
};

export default ParallaxScrollDemo;
