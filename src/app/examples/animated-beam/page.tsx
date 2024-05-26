'use client';

import { BiDirectional } from '@/components/animated-beam/examples/BiDirectional';
import { Centralized } from '@/components/animated-beam/examples/Centralized';
import { MultipleInputs } from '@/components/animated-beam/examples/MultipleInputs';
import { MultipleOutputs } from '@/components/animated-beam/examples/MultipleOutputs';
import { UniDirectional } from '@/components/animated-beam/examples/UniDirectional';

const AnimatedBeamDemo = () => {
    return (
        <div className='my-32 flex h-full w-full flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-white'>Centralized</h1>
            <Centralized />

            <h1 className='text-3xl font-bold text-white'>Uni Directional</h1>
            <UniDirectional />

            <h1 className='text-3xl font-bold text-white'>Bi Directional</h1>
            <BiDirectional />

            <h1 className='text-3xl font-bold text-white'>Multiple Inputs</h1>
            <MultipleInputs />

            <h1 className='text-3xl font-bold text-white'>Multiple Outputs</h1>
            <MultipleOutputs />
        </div>
    );
};

export default AnimatedBeamDemo;
