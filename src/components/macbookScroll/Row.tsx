export const Row = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mb-[2px] flex w-full flex-shrink-0 gap-[2px]'>
            {children}
        </div>
    );
};
