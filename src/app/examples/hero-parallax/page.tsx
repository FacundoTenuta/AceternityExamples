'use client';
import { HeroParallax } from '@/components/heroParallax/HeroParallax';
import React from 'react';
import Moonbeam from '@/public/assets/moonbeam.png';
import Cursor from '@/public/assets/cursor.png';
import Rogue from '@/public/assets/rogue.png';
import Editorially from '@/public/assets/editorially.png';
import Editrix from '@/public/assets/editrix.png';
import PixelPerfect from '@/public/assets/pixelperfect.png';
import Algochurn from '@/public/assets/algochurn.png';
import AceternityUI from '@/public/assets/aceternityui.png';
import TailwindMasterKit from '@/public/assets/tailwindmasterkit.png';
import SmartBridge from '@/public/assets/smartbridge.png';
import Renderwork from '@/public/assets/renderwork.png';
import CremeDigital from '@/public/assets/cremedigital.png';
import GoldenBellsAcademy from '@/public/assets/goldenbellsacademy.png';
import Invoker from '@/public/assets/invoker.png';
import EFreeInvoice from '@/public/assets/efreeinvoice.png';

const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbeam.com',
        thumbnail: Moonbeam,
    },
    {
        title: 'Cursor',
        link: 'https://cursor.so',
        thumbnail: Cursor,
    },
    {
        title: 'Rogue',
        link: 'https://userogue.com',
        thumbnail: Rogue,
    },

    {
        title: 'Editorially',
        link: 'https://editorially.org',
        thumbnail: Editorially,
    },
    {
        title: 'Editrix AI',
        link: 'https://editrix.ai',
        thumbnail: Editrix,
    },
    {
        title: 'Pixel Perfect',
        link: 'https://app.pixelperfect.quest',
        thumbnail: PixelPerfect,
    },

    {
        title: 'Algochurn',
        link: 'https://algochurn.com',
        thumbnail: Algochurn,
    },
    {
        title: 'Aceternity UI',
        link: 'https://ui.aceternity.com',
        thumbnail: AceternityUI,
    },
    {
        title: 'Tailwind Master Kit',
        link: 'https://tailwindmasterkit.com',
        thumbnail: TailwindMasterKit,
    },
    {
        title: 'SmartBridge',
        link: 'https://smartbridgetech.com',
        thumbnail: SmartBridge,
    },
    {
        title: 'Renderwork Studio',
        link: 'https://renderwork.studio',
        thumbnail: Renderwork,
    },

    {
        title: 'Creme Digital',
        link: 'https://cremedigital.com',
        thumbnail: CremeDigital,
    },
    {
        title: 'Golden Bells Academy',
        link: 'https://goldenbellsacademy.com',
        thumbnail: GoldenBellsAcademy,
    },
    {
        title: 'Invoker Labs',
        link: 'https://invoker.lol',
        thumbnail: Invoker,
    },
    {
        title: 'E Free Invoice',
        link: 'https://efreeinvoice.com',
        thumbnail: EFreeInvoice,
    },
];

const HeroParallaxDemo = () => {
    return (
        <div className='mt-12'>
            <HeroParallax products={products} />;
        </div>
    );
};

export default HeroParallaxDemo;
