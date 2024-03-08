import { Children, ReactElement, cloneElement, isValidElement } from 'react';
import { cn } from '@/utils/cn';
import { BentoGridItem } from './BentoGridItem';

interface BentoGridProps {
    className?: string;
    cols?: number;
    rows?: number;
    childrenClassName?: string;
    childrenStyle?: React.CSSProperties;
    roundedSizeItems?: number;
    children?: ReactElement | ReactElement[];
}

export const BentoGrid = ({
    className,
    cols = 3,
    rows = 3,
    childrenClassName,
    childrenStyle,
    children,
}: BentoGridProps) => {
    return (
        <div
            className={cn(
                'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem]',
                `md:grid-cols-${cols}`,
                `md:grid-rows-${rows}`,
                className
            )}
        >
            {Children.map(children, (child) => {
                if (!isValidElement<BentoGridItem>(child)) return null;
                return cloneElement(child, {
                    className: cn(childrenClassName, child.props.className),
                    style: childrenStyle,
                });
            })}
        </div>
    );
};
