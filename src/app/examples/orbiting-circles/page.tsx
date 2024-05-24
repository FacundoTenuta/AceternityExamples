import { Github } from '@/components/icons/Github';
import { GoogleDrive } from '@/components/icons/GoogleDrive';
import { Notion } from '@/components/icons/Notion';
import { OpenAi } from '@/components/icons/OpenAi';
import { WhatsApp } from '@/components/icons/WhatsApp';
import OrbitingCircles from '@/components/orbiting-circles/OrbitingCircles';

const Icons = {
    gitHub: Github,
    notion: Notion,
    openai: OpenAi,
    googleDrive: GoogleDrive,
    whatsapp: WhatsApp,
};

const OrbitingCirclesDemo = () => {
    return (
        <div className='bg-background relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg'>
            <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
                Circles
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className='h-[30px] w-[30px] border-none bg-transparent'
                duration={20}
                delay={20}
                radius={80}
            >
                <Icons.whatsapp />
            </OrbitingCircles>
            <OrbitingCircles
                className='h-[30px] w-[30px] border-none bg-transparent'
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.notion />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className='h-[50px] w-[50px] border-none bg-transparent'
                reverse
                radius={190}
                duration={20}
            >
                <Icons.googleDrive />
            </OrbitingCircles>
            <OrbitingCircles
                className='h-[50px] w-[50px] border-none bg-transparent'
                reverse
                radius={190}
                duration={20}
                delay={20}
            >
                <Icons.gitHub />
            </OrbitingCircles>
        </div>
    );
};

export default OrbitingCirclesDemo;
