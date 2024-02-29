'use client';
import { HeroParallax } from '@/components/heroParallax/HeroParallax';
import React from 'react';

const products = [
	{
		title: 'Moonbeam',
		link: 'https://gomoonbeam.com',
		thumbnail: '/assets/moonbeam.png',
	},
	{
		title: 'Cursor',
		link: 'https://cursor.so',
		thumbnail: '/assets/cursor.png',
	},
	{
		title: 'Rogue',
		link: 'https://userogue.com',
		thumbnail: '/assets/rogue.png',
	},

	{
		title: 'Editorially',
		link: 'https://editorially.org',
		thumbnail: '/assets/editorially.png',
	},
	{
		title: 'Editrix AI',
		link: 'https://editrix.ai',
		thumbnail: '/assets/editrix.png',
	},
	{
		title: 'Pixel Perfect',
		link: 'https://app.pixelperfect.quest',
		thumbnail: '/assets/pixelperfect.png',
	},

	{
		title: 'Algochurn',
		link: 'https://algochurn.com',
		thumbnail: '/assets/algochurn.png',
	},
	{
		title: 'Aceternity UI',
		link: 'https://ui.aceternity.com',
		thumbnail: '/assets/aceternityui.png',
	},
	{
		title: 'Tailwind Master Kit',
		link: 'https://tailwindmasterkit.com',
		thumbnail: '/assets/tailwindmasterkit.png',
	},
	{
		title: 'SmartBridge',
		link: 'https://smartbridgetech.com',
		thumbnail: '/assets/smartbridge.png',
	},
	{
		title: 'Renderwork Studio',
		link: 'https://renderwork.studio',
		thumbnail: '/assets/renderwork.png',
	},

	{
		title: 'Creme Digital',
		link: 'https://cremedigital.com',
		thumbnail: '/assets/cremedigital.png',
	},
	{
		title: 'Golden Bells Academy',
		link: 'https://goldenbellsacademy.com',
		thumbnail: '/assets/goldenbellsacademy.png',
	},
	{
		title: 'Invoker Labs',
		link: 'https://invoker.lol',
		thumbnail: '/assets/invoker.png',
	},
	{
		title: 'E Free Invoice',
		link: 'https://efreeinvoice.com',
		thumbnail: '/assets/efreeinvoice.png',
	},
];

const HeroParallaxDemo = () => {
	return (
		<div className="mt-12">
			<HeroParallax products={products} />;
		</div>
	);
};

export default HeroParallaxDemo;
