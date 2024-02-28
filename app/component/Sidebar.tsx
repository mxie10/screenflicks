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

    return (
        <div
            ref={sidebarRef}
            className={`
                fixed
                min-h-screen
                bg-gray-100
                w-3/4
                md:hidden
                md:w-1/4
                xl:w-15
                p-3
                transition-transform
                duration-300
                md:translate-x-0
                ${sidebarModal.isOpen ? 'translate-x-0' : '-translate-x-full'}
                z-40
                shadow-inner
            `}
        >
            <div className='absolute top-2 right-2'>
                <MdCancel size={25} className='cursor-pointer' onClick={onClose} />
            </div>
        </div>
    )
}

export default SideBar;
