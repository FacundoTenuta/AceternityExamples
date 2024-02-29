'use client';
import { AnimatePresence, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FollowPointer } from './FollowPointer';
import { cn } from '@/utils/cn';

export const FollowerPointerCard = ({
	children,
	className,
	title,
}: {
	children: React.ReactNode;
	className?: string;
	title?: string | React.ReactNode;
}) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const ref = useRef<HTMLDivElement>(null);
	const [rect, setRect] = useState<DOMRect | null>(null);
	const [isInside, setIsInside] = useState<boolean>(false); // Add this line

	useEffect(() => {
		if (ref.current) {
			setRect(ref.current.getBoundingClientRect());
		}
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (rect) {
			const scrollX = window.scrollX;
			const scrollY = window.scrollY;
			x.set(e.clientX - rect.left + scrollX);
			y.set(e.clientY - rect.top + scrollY);
		}
	};
	const handleMouseLeave = () => {
		setIsInside(false);
	};

	const handleMouseEnter = () => {
		setIsInside(true);
	};
	return (
		<div
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			style={{
				cursor: 'none',
			}}
			ref={ref}
			className={cn('relative', className)}
		>
			<AnimatePresence mode="wait">
				{isInside && <FollowPointer x={x} y={y} title={title} />}
			</AnimatePresence>
			{children}
		</div>
	);
};
