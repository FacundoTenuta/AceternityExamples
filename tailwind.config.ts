import type { Config } from 'tailwindcss';
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
                'skew-scroll': 'skew-scroll 20s linear infinite',
                orbit: 'orbit calc(var(--duration)*1s) linear infinite',
                'border-beam':
                    'border-beam calc(var(--duration)*1s) infinite linear',
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))',
                    },
                },
                'skew-scroll': {
                    '0%': {
                        transform:
                            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
                    },
                    '100%': {
                        transform:
                            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
                    },
                },
                orbit: {
                    '0%': {
                        transform:
                            'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
                    },
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}

export default config;
