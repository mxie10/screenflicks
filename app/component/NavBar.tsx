'use client';

import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const menu = [
    {
        title: 'Movies',
        link:''
    },
    {
        title: 'TV',
        link:''
    },
    {
        title: 'Anime',
        link:''
    },
    {
        title: 'Free',
        link:''
    }
]

const Header = () => {

    const router = useRouter();

    return (
        <div className='
        hidden
        h-12 
        px-5
        md:flex 
        md:flex-row 
        md:justify-between 
        md:items-center
        fixed
        w-full
        shadow-md
        bg-white
        z-30
      '
        >
            <div className='flex flex-row justify-center items-center gap-5'>
                <div className='font-bold text-xl text-cyan-700'>Screenflicks</div>
                {menu && menu.map((item)=>{
                    return (
                        <div className='text-md cursor-pointer font-semibold' key={item.title}>
                            {item.title}
                        </div>
                    )
                })}
                <div className='ml-10 flex flex-row items-center relative'>
                    <input 
                        type="text" 
                        placeholder="Explore the Cinematic World" 
                        className='p-2 rounded-md w-64 pl-9 text-sm' 
                    />
                    <FaSearch size={20} className='absolute ml-2'/>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-5'>
            <div className='text-md cursor-pointer font-semibold'>Redeem</div>
                <div className='text-md cursor-pointer font-semibold'>Sign In</div>
            </div>

        </div>
    )
}

export default Header;
