import { FollowerPointerCard } from '@/components/followingPointer/FollowerPointerCard';
import Image from 'next/image';
import Towers from '@/public/assets/towers.avif';

const FollowingPointerDemo = () => {
    return (
        <div className='mx-auto w-80'>
            <FollowerPointerCard
                title={
                    <TitleComponent
                        title={blogContent.author}
                        avatar={blogContent.authorAvatar.src}
                    />
                }
            >
                <div className='group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl'>
                    <div className='aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100'>
                        <Image
                            src={blogContent.image}
                            alt='thumbnail'
                            width='1000'
                            height='600'
                            priority
                            className='transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl'
                        />
                    </div>
                    <div className='p-4'>
                        <h2 className='my-4 text-lg font-bold text-zinc-700'>
                            {blogContent.title}
                        </h2>
                        <h2 className='my-4 text-sm font-normal text-zinc-500'>
                            {blogContent.description}
                        </h2>
                        <div className='mt-10 flex flex-row items-center justify-between'>
                            <span className='text-sm text-gray-500'>
                                {blogContent.date}
                            </span>
                            <div className='relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white'>
                                Read More
                            </div>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
        </div>
    );
};

const blogContent = {
    slug: 'amazing-tailwindcss-grid-layouts',
    author: 'Manu Arora',
    date: '28th March, 2023',
    title: 'Amazing Tailwindcss Grid Layout Examples',
    description:
        'Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.',
    image: Towers,
    authorAvatar: Towers,
};

const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className='flex items-center space-x-2'>
        <Image
            src={avatar}
            height='20'
            width='20'
            alt='thumbnail'
            className='aspect-square rounded-full border-2 border-white'
        />
        <p>{title}</p>
    </div>
);

export default FollowingPointerDemo;
