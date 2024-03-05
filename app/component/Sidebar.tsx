'use client'

import React, { useRef,useEffect } from 'react'
import useSidebar from '../hooks/useSidebar';
import { MdCancel } from "react-icons/md";

const SideBar = () => {
    const sidebarModal = useSidebar();
    const sidebarRef = useRef(null);

    const onClose = () => {
        sidebarModal.onClose();
    }

    const menueItem = 'font-bold '

    return (
        <div
            ref={sidebarRef}
            className={`
                fixed
                min-h-screen
                bg-white
                w-3/4
                lg:hidden
                md:w-2/4
                xl:w-15
                p-3
                transition-transform
                duration-300
                lg:translate-x-0
                ${sidebarModal.isOpen ? 'translate-x-0' : '-translate-x-full'}
                z-40
                shadow-inner
                flex
            `}
        >
            <div className='absolute top-2 right-2 h-1/6'>
                <MdCancel size={25} className='cursor-pointer' onClick={onClose} />
            </div>

            <div
                className='
                    flex
                    flex-col
                    mt-10
                    justify-between
                '
            >
                <div className='flex flex-col gap-3 font-serif font-bold'>
                    <div>Movies</div>
                    <div>TV</div>
                    <div>Anime</div>
                    <div>Free</div>
                </div>
                <div className='flex flex-col gap-3 font-serif font-bold'>
                    <div>Redeem</div>
                    <div>Sign In</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
