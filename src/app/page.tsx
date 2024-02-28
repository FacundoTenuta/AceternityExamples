import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1 className="text-white font-bold text-4xl">Examples</h1>

			<div className="flex flex-col items-center mt-4">
				<Link
					href="/examples/macbook-scroll"
					className="bg-slate-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-600"
				>
					Macbook Scroll
				</Link>
				<Link
					href="/examples/gemini-scroll"
					className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
				>
					Gemini Scroll
				</Link>
			</div>
		</>
	);
}
