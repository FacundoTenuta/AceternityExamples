import { DockEffect } from '@/components/dockEffect/DockEffect';

export default function Page() {
    const apps = [
        '/assets/notion.png',
        '/assets/docker.png',
        '/assets/vscode.png',
        '/assets/chrome.png',
        '/assets/finder.png',
        '/assets/spotify.png',
    ];
    return (
        <div className='flex flex-col gap-20'>
            <DockEffect />
            <DockEffect
                apps={apps}
                childrensClassName='bg-transparent rounded-md overflow-hidden'
            />
        </div>
    );
}
