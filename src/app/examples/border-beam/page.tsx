import { BorderBeam } from '@/components/border-beam/BorderBeam';
import Image from 'next/image';
import Linear from '@/public/assets/linear.webp';

const BorderBeamDemo = () => {
    return (
        <div className='relative flex h-full items-center justify-center rounded-xl'>
            <div className='hidden w-[700px] rounded-[inherit] border border-slate-500 object-contain shadow-lg dark:block'>
                <Image
                    className='rounded-[inherit]'
                    src={Linear}
                    alt='Hero Image'
                />
                <BorderBeam size={250} duration={12} delay={9} />
            </div>
        </div>
    );
};

export default BorderBeamDemo;
