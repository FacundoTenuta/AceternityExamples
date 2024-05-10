'use client';

import propagateMouseEvent from '@/utils/mouseEventPropagation';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

export const FluidBackground = () => {
    const activeConfig = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        INITIAL: true,
        SPLAT_AMOUNT: 5,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SPLAT_KEY: 'Space',
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        COLOR_PALETTE: [],
        HOVER: true,
        BACK_COLOR: '#000000',
        TRANSPARENT: false,
        BRIGHTNESS: 0.5,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
    };

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseEvent = (event: MouseEvent) => {
        propagateMouseEvent(event, canvasRef);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const div = divRef.current;

        const root = getComputedStyle(document.documentElement);
        if (div) {
            div.addEventListener('click', handleMouseEvent);
            div.addEventListener('mousemove', handleMouseEvent);
            div.addEventListener('mousedown', handleMouseEvent);
            div.addEventListener('mouseup', handleMouseEvent);
            div.addEventListener('mouseover', handleMouseEvent);
            div.addEventListener('mouseout', handleMouseEvent);
        }
        if (canvas) {
            webGLFluidEnhanced.simulation(canvas, activeConfig);
        }
        return () => {
            if (div) {
                div.removeEventListener('click', handleMouseEvent);
                div.removeEventListener('mousemove', handleMouseEvent);
                div.removeEventListener('mousedown', handleMouseEvent);
                div.removeEventListener('mouseup', handleMouseEvent);
                div.removeEventListener('mouseover', handleMouseEvent);
                div.removeEventListener('mouseout', handleMouseEvent);
            }
        };
    }, [canvasRef]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className='fixed left-0 top-0 z-0 h-full w-full'
            />
            <div
                ref={divRef}
                className='fixed left-0 top-0 z-10 h-full w-full'
            />
        </>
    );
};
