import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from './Logo';

export const Lid = ({
	scaleX,
	scaleY,
	rotate,
	translate,
	src,
}: {
	scaleX: MotionValue<number>;
	scaleY: MotionValue<number>;
	rotate: MotionValue<number>;
	translate: MotionValue<number>;
	src?: string;
}) => {
	return (
		<div className="relative [perspective:800px]">
			<div
				style={{
					transform: 'perspective(800px) rotateX(-25deg) translateZ(0px)',
					transformOrigin: 'bottom',
					transformStyle: 'preserve-3d',
				}}
				className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
			>
				<div
					style={{
						boxShadow: '0px 2px 0px 2px var(--neutral-900) inset',
					}}
					className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
				>
					<span className="text-white">
						<Logo />
					</span>
				</div>
			</div>
			<motion.div
				style={{
					scaleX: scaleX,
					scaleY: scaleY,
					rotateX: rotate,
					translateY: translate,
					transformStyle: 'preserve-3d',
					transformOrigin: 'top',
				}}
				className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
			>
				<div className="absolute inset-0 bg-[#272729] rounded-lg" />
				<Image
					src={src as string}
					alt="aceternity logo"
					fill
					className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
				/>
			</motion.div>
		</div>
	);
};
