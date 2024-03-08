import { cn } from '@/utils/cn';

export type BentoGridItem = {
    className?: string;
    style?: React.CSSProperties;
    rowSpan?: number;
    colSpan?: number;
    children?: React.ReactNode;
};

export const BentoGridItem = ({
    className,
    style,
    rowSpan = 1,
    colSpan = 1,
    children,
}: {
    className?: string;
    style?: React.CSSProperties;
    rowSpan?: number;
    colSpan?: number;
    children?: React.ReactNode;
}) => (
    <div
        className={cn(
            'shadow-input flex flex-col justify-between space-y-4 overflow-hidden rounded-xl bg-white',
            className
        )}
        style={{
            ...style,
            gridRow: `span ${rowSpan}`,
            gridColumn: `span ${colSpan}`,
        }}
    >
        {children}
    </div>
);
