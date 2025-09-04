import useModalAction from '@/hooks/useModalAction';
import BackBtn from '../back-btn/BackBtn';
import PrimaryTitle from '../title/PrimaryTitle';

export default function Modal({ isLeft, children, isOpen, setIsOpen, title }) {
    const { handleCloseAllModals } = useModalAction();
    return (
        <div onClick={() => handleCloseAllModals()} className={` fixed min-h-[100vh] w-[100vw] top-0 transform right-0 rounded-lg duration-300 shadow-md bg-black/50 flex justify-center items-center z-[5000] ${isLeft ? "justify-start -translate-x-full" : "justify-end translate-x-full"} ${isOpen && "!translate-x-0"}`}>
            <div className='bg-white pb-10 overflow-y-auto hide-scrollbar h-[100svh]' onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className='flex flex-col justify-between items-center h-[100%]'>
                    <div className='px-4 py-6 sticky top-0 bg-white w-full'>
                        <div className='relative flex justify-between items-center' >
                            <BackBtn className={"absolute z-[100] top-1"} handleBack={() => setIsOpen(false)} />
                            {/* <h3 className='w-full absolute top-0 text-center text-lg font-bold lg:text-2xl'>{title}</h3> */}
                            <PrimaryTitle title={title} className={"w-full text-center"} />
                        </div>
                    </div>
                    <div className='grow overflow-y-scroll hide-scrollbar px-6 min-w-[100vw] lg:min-w-lg w-fit'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ${isLeft ? 'left-0 translate-x-full' : 'right-0 -translate-x-full'}
