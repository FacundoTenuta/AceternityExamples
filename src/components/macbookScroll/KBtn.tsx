import { cn } from '@/utils/cn';

export const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
}: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}) => {
    return (
        <div
            className={cn(
                'rounded-[4px] p-[0.5px]',
                backlit && 'bg-white/[0.2] shadow-xl shadow-white'
            )}
        >
            <div
                className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]',
                    className
                )}
                style={{
                    boxShadow:
                        '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset',
                }}
            >
                <div
                    className={cn(
                        'flex w-full flex-col items-center justify-center text-[5px] text-neutral-200',
                        childrenClassName,
                        backlit && 'text-white'
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
