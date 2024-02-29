'use client';

import { usePathname } from 'next/navigation';

export const BackButton = () => {
	const pathname = usePathname();

	if (pathname === '/') {
		return null;
	}

	return (
		<div className="fixed top-4 left-4">
			<a href="/" className="text-white font-bold text-2xl hover:text-slate-500">
				←
			</a>
		</div>
	);
};
