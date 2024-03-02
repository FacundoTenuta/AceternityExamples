'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Card } from './types';
import { SelectedCard } from './SelectedCard';
import { BlurImage } from './BlurImage';

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className='mx-auto grid h-full w-full max-w-7xl grid-cols-1  gap-4 p-10 md:grid-cols-3 '>
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, '')}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            'relative overflow-hidden',
                            selected?.id === card.id
                                ? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
                                : lastSelected?.id === card.id
                                  ? 'z-40 h-full w-full rounded-xl bg-white'
                                  : 'h-full w-full rounded-xl bg-white'
                        )}
                        layout
                    >
                        {selected?.id === card.id && (
                            <SelectedCard selected={selected} />
                        )}
                        <BlurImage card={card} />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
                    selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};
