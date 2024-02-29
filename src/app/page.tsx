import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1 className="text-white font-bold text-4xl">Examples</h1>

			<div className="flex flex-col gap-2 items-center mt-4">
				<Link
					href="/examples/macbook-scroll"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Macbook Scroll
				</Link>
				<Link
					href="/examples/gemini-scroll"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Gemini Scroll
				</Link>
				<Link
					href="/examples/3d-card"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					3D Card
				</Link>
				<Link
					href="/examples/3d-card-rotated"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					3D Card Rotated
				</Link>
				<Link
					href="/examples/sparkles"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Sparkles
				</Link>
				<Link
					href="/examples/sparkles-full"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Sparkles Full
				</Link>
				<Link
					href="/examples/background-gradient"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Background Gradient
				</Link>
				<Link
					href="/examples/hero-parallax"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Hero Parallax
				</Link>
				<Link
					href="/examples/following-pointer"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Following Pointer
				</Link>
			</div>
		</>
	);
}
