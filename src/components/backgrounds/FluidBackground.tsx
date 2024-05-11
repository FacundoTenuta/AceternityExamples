'use client';

import propagateMouseEvent from '@/utils/mouseEventPropagation';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

export const FluidBackground = () => {
    const activeConfig = {
        // Resolución de la simulación de partículas
        SIM_RESOLUTION: 128,

        // Resolución de la textura de tinte
        DYE_RESOLUTION: 1024,

        // Resolución de captura
        CAPTURE_RESOLUTION: 512,

        // Disipación de densidad
        DENSITY_DISSIPATION: 1,

        // Disipación de velocidad
        VELOCITY_DISSIPATION: 0.2,

        // Presión
        PRESSURE: 0.8,

        // Iteraciones de presión
        PRESSURE_ITERATIONS: 20,

        // Rizo (curl)
        CURL: 30,

        // Bandera para indicar si es la inicial
        INITIAL: true,

        // Cantidad de tinte a rociar
        SPLAT_AMOUNT: 5,

        // Radio de rociado
        SPLAT_RADIUS: 0.25,

        // Fuerza de rociado
        SPLAT_FORCE: 6000,

        // Tecla para rociar
        SPLAT_KEY: 'Space',

        // Sombreado
        SHADING: true,

        // Colorido
        COLORFUL: true,

        // Velocidad de actualización de color
        COLOR_UPDATE_SPEED: 10,

        // Paleta de colores
        COLOR_PALETTE: [],

        // Activar el efecto hover
        HOVER: true,

        // Color de fondo
        BACK_COLOR: '#000000',

        // Transparente
        TRANSPARENT: false,

        // Brillo
        BRIGHTNESS: 0.5,

        // Desenfoque (Bloom)
        BLOOM: true,

        // Iteraciones de Bloom
        BLOOM_ITERATIONS: 8,

        // Resolución de Bloom
        BLOOM_RESOLUTION: 256,

        // Intensidad de Bloom
        BLOOM_INTENSITY: 0.8,

        // Umbral de Bloom
        BLOOM_THRESHOLD: 0.6,

        // Suavizado de Bloom
        BLOOM_SOFT_KNEE: 0.7,

        // Rayos de sol
        SUNRAYS: true,

        // Resolución de los rayos de sol
        SUNRAYS_RESOLUTION: 196,

        // Peso de los rayos de sol
        SUNRAYS_WEIGHT: 1.0,
    };

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseEvent = (event: MouseEvent) => {
        propagateMouseEvent(event, canvasRef);
    };

    const handleTouchEvent = (event: TouchEvent) => {
        event.stopPropagation();
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            propagateMouseEvent(mouseEvent, canvasRef);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const div = divRef.current;

        const root = getComputedStyle(document.documentElement);
        if (div) {
            /* div.addEventListener('click', handleMouseEvent); */
            div.addEventListener('mousemove', handleMouseEvent);
            /* div.addEventListener('mousedown', handleMouseEvent);
            div.addEventListener('mouseup', handleMouseEvent);
            div.addEventListener('mouseover', handleMouseEvent);
            div.addEventListener('mouseout', handleMouseEvent); */
            div.addEventListener('touchmove', handleTouchEvent);
        }
        if (canvas) {
            webGLFluidEnhanced.simulation(canvas, activeConfig);
        }
        return () => {
            if (div) {
                /* div.removeEventListener('click', handleMouseEvent); */
                div.removeEventListener('mousemove', handleMouseEvent);
                /* div.removeEventListener('mousedown', handleMouseEvent); */
                /* div.removeEventListener('mouseup', handleMouseEvent); */
                /* div.removeEventListener('mouseover', handleMouseEvent); */
                /* div.removeEventListener('mouseout', handleMouseEvent); */
                div.removeEventListener('touchmove', handleTouchEvent);
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
