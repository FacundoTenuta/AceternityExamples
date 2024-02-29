'use client';

import { cn } from '@/utils/cn';

export const CardBody = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
				className
			)}
		>
			{children}
		</div>
	);
};
