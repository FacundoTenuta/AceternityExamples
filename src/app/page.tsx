import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1 className='text-4xl font-bold text-white'>Examples</h1>

            <div className='mt-4 flex flex-col items-center gap-2'>
                <Link
                    href='/examples/macbook-scroll'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Macbook Scroll
                </Link>
                <Link
                    href='/examples/gemini-scroll'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Gemini Scroll
                </Link>
                <Link
                    href='/examples/3d-card'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    3D Card
                </Link>
                <Link
                    href='/examples/3d-card-rotated'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    3D Card Rotated
                </Link>
                <Link
                    href='/examples/sparkles'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Sparkles
                </Link>
                <Link
                    href='/examples/sparkles-full'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Sparkles Full
                </Link>
                <Link
                    href='/examples/background-gradient'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Background Gradient
                </Link>
                <Link
                    href='/examples/hero-parallax'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Hero Parallax
                </Link>
                <Link
                    href='/examples/following-pointer'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Following Pointer
                </Link>
                <Link
                    href='/examples/infinite-moving-cards'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Infinite Moving Cards
                </Link>
                <Link
                    href='/examples/parallax-scroll'
                    className='rounded-md bg-slate-500 px-4 py-2 text-white transition-all duration-300 hover:bg-slate-600'
                >
                    Parallax Scroll
                </Link>
            </div>
        </>
    );
}
