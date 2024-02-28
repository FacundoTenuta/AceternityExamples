'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lid } from '@/components/macbookScroll/Lid';
import { SpeakerGrid } from '@/components/macbookScroll/SpeakerGrid';
import { Keypad } from '@/components/macbookScroll/Keypad';
import { Trackpad } from '@/components/macbookScroll/Trackpad';

export const MacbookScroll = ({
	src,
	showGradient,
	title,
	badge,
}: {
	src?: string;
	showGradient?: boolean;
	title?: string | React.ReactNode;
	badge?: React.ReactNode;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window && window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	const scaleX = useTransform(
		scrollYProgress,
		[0, 0.3],
		[1.2, isMobile ? 1 : 1.5]
	);
	const scaleY = useTransform(
		scrollYProgress,
		[0, 0.3],
		[0.6, isMobile ? 1 : 1.5]
	);
	const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
	const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
	const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

	return (
		<div
			ref={ref}
			className="min-h-[200vh] flex flex-col items-center py-0 md:py-40 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50"
		>
			<motion.h2
				style={{
					translateY: textTransform,
					opacity: textOpacity,
				}}
				className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
			>
				{title || (
					<span>
						This Macbook is built with Tailwindcss. <br /> No kidding.
					</span>
				)}
			</motion.h2>
			{/* Lid */}
			<Lid
				src={src}
				scaleX={scaleX}
				scaleY={scaleY}
				rotate={rotate}
				translate={translate}
			/>
			{/* Base area */}
			<div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
				{/* above keyboard bar */}
				<div className="h-10 w-full relative">
					<div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
				</div>
				<div className="flex relative">
					<div className="mx-auto w-[10%] overflow-hidden  h-full">
						<SpeakerGrid />
					</div>
					<div className="mx-auto w-[80%] h-full">
						<Keypad />
					</div>
					<div className="mx-auto w-[10%] overflow-hidden  h-full">
						<SpeakerGrid />
					</div>
				</div>
				<Trackpad />
				<div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
				{showGradient && (
					<div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
				)}
				{badge && <div className="absolute bottom-4 left-4">{badge}</div>}
			</div>
		</div>
	);
};
