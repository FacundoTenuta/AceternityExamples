'use client';

import { TextGenerateEffect } from '@/components/textGenerateEffect/TextGenerateEffect';

const words = `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const TextGenerateEffectDemo = () => {
    return (
        <div
            className='
            max-w-lg
            rounded-[22px]
            bg-white
            p-4
            sm:p-10
            dark:bg-zinc-900
        '
        >
            <TextGenerateEffect repeat words={words} />
        </div>
    );
};

export default TextGenerateEffectDemo;
