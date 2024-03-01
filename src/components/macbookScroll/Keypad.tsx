import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretDownFilled,
    IconCaretLeftFilled,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconCommand,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconSearch,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
    IconWorld,
} from '@tabler/icons-react';
import { KBtn } from './KBtn';
import { Row } from './Row';
import { OptionKey } from './OptionKey';

export const Keypad = () => {
    return (
        <div className='mx-1 h-full rounded-md bg-[#050505] p-1'>
            {/* First Row */}
            <Row>
                <KBtn
                    className='w-10 items-end justify-start pb-[2px] pl-[4px]'
                    childrenClassName='items-start'
                >
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F1</span>
                </KBtn>

                <KBtn>
                    <IconBrightnessUp className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F2</span>
                </KBtn>
                <KBtn>
                    <IconTable className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F3</span>
                </KBtn>
                <KBtn>
                    <IconSearch className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F4</span>
                </KBtn>
                <KBtn>
                    <IconMicrophone className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F5</span>
                </KBtn>
                <KBtn>
                    <IconMoon className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F6</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackPrev className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F7</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F8</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackNext className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F8</span>
                </KBtn>
                <KBtn>
                    <IconVolume3 className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F10</span>
                </KBtn>
                <KBtn>
                    <IconVolume2 className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F11</span>
                </KBtn>
                <KBtn>
                    <IconVolume className='h-[6px] w-[6px]' />
                    <span className='mt-1 inline-block'>F12</span>
                </KBtn>
                <KBtn>
                    <div className='h-4 w-4 rounded-full  bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px'>
                        <div className='h-full w-full rounded-full bg-black' />
                    </div>
                </KBtn>
            </Row>

            {/* Second row */}
            <Row>
                <KBtn>
                    <span className='block'>~</span>
                    <span className='mt-1 block'>`</span>
                </KBtn>

                <KBtn>
                    <span className='block '>!</span>
                    <span className='block'>1</span>
                </KBtn>
                <KBtn>
                    <span className='block'>@</span>
                    <span className='block'>2</span>
                </KBtn>
                <KBtn>
                    <span className='block'>#</span>
                    <span className='block'>3</span>
                </KBtn>
                <KBtn>
                    <span className='block'>$</span>
                    <span className='block'>4</span>
                </KBtn>
                <KBtn>
                    <span className='block'>%</span>
                    <span className='block'>5</span>
                </KBtn>
                <KBtn>
                    <span className='block'>^</span>
                    <span className='block'>6</span>
                </KBtn>
                <KBtn>
                    <span className='block'>&</span>
                    <span className='block'>7</span>
                </KBtn>
                <KBtn>
                    <span className='block'>*</span>
                    <span className='block'>8</span>
                </KBtn>
                <KBtn>
                    <span className='block'>(</span>
                    <span className='block'>9</span>
                </KBtn>
                <KBtn>
                    <span className='block'>)</span>
                    <span className='block'>0</span>
                </KBtn>
                <KBtn>
                    <span className='block'>&mdash;</span>
                    <span className='block'>_</span>
                </KBtn>
                <KBtn>
                    <span className='block'>+</span>
                    <span className='block'> = </span>
                </KBtn>
                <KBtn
                    className='w-10 items-end justify-end pb-[2px] pr-[4px]'
                    childrenClassName='items-end'
                >
                    delete
                </KBtn>
            </Row>

            {/* Third row */}
            <Row>
                <KBtn
                    className='w-10 items-end justify-start pb-[2px] pl-[4px]'
                    childrenClassName='items-start'
                >
                    tab
                </KBtn>
                <KBtn>
                    <span className='block'>Q</span>
                </KBtn>

                <KBtn>
                    <span className='block'>W</span>
                </KBtn>
                <KBtn>
                    <span className='block'>E</span>
                </KBtn>
                <KBtn>
                    <span className='block'>R</span>
                </KBtn>
                <KBtn>
                    <span className='block'>T</span>
                </KBtn>
                <KBtn>
                    <span className='block'>Y</span>
                </KBtn>
                <KBtn>
                    <span className='block'>U</span>
                </KBtn>
                <KBtn>
                    <span className='block'>I</span>
                </KBtn>
                <KBtn>
                    <span className='block'>O</span>
                </KBtn>
                <KBtn>
                    <span className='block'>P</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`{`}</span>
                    <span className='block'>{`[`}</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`}`}</span>
                    <span className='block'>{`]`}</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`|`}</span>
                    <span className='block'>{`\\`}</span>
                </KBtn>
            </Row>

            {/* Fourth Row */}
            <Row>
                <KBtn
                    className='w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]'
                    childrenClassName='items-start'
                >
                    caps lock
                </KBtn>
                <KBtn>
                    <span className='block'>A</span>
                </KBtn>

                <KBtn>
                    <span className='block'>S</span>
                </KBtn>
                <KBtn>
                    <span className='block'>D</span>
                </KBtn>
                <KBtn>
                    <span className='block'>F</span>
                </KBtn>
                <KBtn>
                    <span className='block'>G</span>
                </KBtn>
                <KBtn>
                    <span className='block'>H</span>
                </KBtn>
                <KBtn>
                    <span className='block'>J</span>
                </KBtn>
                <KBtn>
                    <span className='block'>K</span>
                </KBtn>
                <KBtn>
                    <span className='block'>L</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`:`}</span>
                    <span className='block'>{`;`}</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`"`}</span>
                    <span className='block'>{`'`}</span>
                </KBtn>
                <KBtn
                    className='w-[2.85rem] items-end justify-end pb-[2px] pr-[4px]'
                    childrenClassName='items-end'
                >
                    return
                </KBtn>
            </Row>

            {/* Fifth Row */}
            <Row>
                <KBtn
                    className='w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]'
                    childrenClassName='items-start'
                >
                    shift
                </KBtn>
                <KBtn>
                    <span className='block'>Z</span>
                </KBtn>
                <KBtn>
                    <span className='block'>X</span>
                </KBtn>
                <KBtn>
                    <span className='block'>C</span>
                </KBtn>
                <KBtn>
                    <span className='block'>V</span>
                </KBtn>
                <KBtn>
                    <span className='block'>B</span>
                </KBtn>
                <KBtn>
                    <span className='block'>N</span>
                </KBtn>
                <KBtn>
                    <span className='block'>M</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`<`}</span>
                    <span className='block'>{`,`}</span>
                </KBtn>
                <KBtn>
                    <span className='block'>{`>`}</span>
                    <span className='block'>{`.`}</span>
                </KBtn>{' '}
                <KBtn>
                    <span className='block'>{`?`}</span>
                    <span className='block'>{`/`}</span>
                </KBtn>
                <KBtn
                    className='w-[3.65rem] items-end justify-end pb-[2px] pr-[4px]'
                    childrenClassName='items-end'
                >
                    shift
                </KBtn>
            </Row>

            {/* sixth Row */}
            <Row>
                <KBtn
                    className=''
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-end pr-1'>
                        <span className='block'>fn</span>
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <IconWorld className='h-[6px] w-[6px]' />
                    </div>
                </KBtn>
                <KBtn
                    className=''
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-end pr-1'>
                        <IconChevronUp className='h-[6px] w-[6px]' />
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <span className='block'>control</span>
                    </div>
                </KBtn>
                <KBtn
                    className=''
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-end pr-1'>
                        <OptionKey className='h-[6px] w-[6px]' />
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <span className='block'>option</span>
                    </div>
                </KBtn>
                <KBtn
                    className='w-8'
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-end pr-1'>
                        <IconCommand className='h-[6px] w-[6px]' />
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <span className='block'>command</span>
                    </div>
                </KBtn>
                <KBtn className='w-[8.2rem]'></KBtn>
                <KBtn
                    className='w-8'
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-start pl-1'>
                        <IconCommand className='h-[6px] w-[6px]' />
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <span className='block'>command</span>
                    </div>
                </KBtn>
                <KBtn
                    className=''
                    childrenClassName='h-full justify-between py-[4px]'
                >
                    <div className='flex w-full justify-start pl-1'>
                        <OptionKey className='h-[6px] w-[6px]' />
                    </div>
                    <div className='flex w-full justify-start pl-1'>
                        <span className='block'>option</span>
                    </div>
                </KBtn>
                <div className='mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]'>
                    <KBtn className='h-3 w-6'>
                        <IconCaretUpFilled className='h-[6px] w-[6px]' />
                    </KBtn>
                    <div className='flex'>
                        <KBtn className='h-3 w-6'>
                            <IconCaretLeftFilled className='h-[6px] w-[6px]' />
                        </KBtn>
                        <KBtn className='h-3 w-6'>
                            <IconCaretDownFilled className='h-[6px] w-[6px]' />
                        </KBtn>
                        <KBtn className='h-3 w-6'>
                            <IconCaretRightFilled className='h-[6px] w-[6px]' />
                        </KBtn>
                    </div>
                </div>
            </Row>
        </div>
    );
};
