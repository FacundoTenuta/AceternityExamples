import { renderSimpleIcon, SimpleIcon } from 'react-icon-cloud';

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
    const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
    const minContrastRatio = theme === 'dark' ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
        },
    });
};
