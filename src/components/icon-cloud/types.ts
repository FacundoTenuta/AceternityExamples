import { fetchSimpleIcons } from 'react-icon-cloud';

export type DynamicCloudProps = {
    iconSlugs: string[];
};

export type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;
