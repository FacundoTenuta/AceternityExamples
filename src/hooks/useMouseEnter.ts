import { MouseEnterContext } from '@/components/3dCard/MouseEnterContext';
import { useContext } from 'react';

export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error(
            'useMouseEnter must be used within a MouseEnterProvider'
        );
    }
    return context;
};
