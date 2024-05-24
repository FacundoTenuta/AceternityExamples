import { AnimatedList } from '@/components/animatedList/AnimatedList';
import { Notification } from '@/components/animatedList/Notification';
import { cn } from '@/utils/cn';

const notifications = [
    {
        name: 'Payment received',
        time: '15m ago',
        icon: '💸',
        color: '#00C9A7',
    },
    {
        name: 'User signed up',
        time: '10m ago',
        icon: '👤',
        color: '#FFB800',
    },
    {
        name: 'New message',
        time: '5m ago',
        icon: '💬',
        color: '#FF3D71',
    },
    {
        name: 'New event',
        time: '2m ago',
        icon: '🗞️',
        color: '#1E86FF',
    },
    {
        name: 'Payment received',
        time: '15m ago',
        icon: '💸',
        color: '#00C9A7',
    },
    {
        name: 'User signed up',
        time: '10m ago',
        icon: '👤',
        color: '#FFB800',
    },
    {
        name: 'New message',
        time: '5m ago',
        icon: '💬',
        color: '#FF3D71',
    },
    {
        name: 'New event',
        time: '2m ago',
        icon: '🗞️',
        color: '#1E86FF',
    },
];

export default function Page() {
    return (
        <div className='flex items-center justify-center gap-28 text-6xl'>
            <div className='bg-background relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg p-6'>
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            </div>
        </div>
    );
}
