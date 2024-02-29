'use client'
import React, { useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { RiMovieFill } from "react-icons/ri";

interface MovieCardProps {

}

const MovieCard: React.FC<MovieCardProps> = () => {

    const [ifShowPlayIcon, setIfShowPlayIcon] = useState(false);

    const showPlayIcon = () => {
        setIfShowPlayIcon(true);
    }

    const hideShowPlayIcon = () => {
        setIfShowPlayIcon(false);
    }

    return (
        <div className='w-52 h-auto'>
            <div 
                className={`
                    flex 
                    flex-col 
                    rounded-lg 
                    relative 
                    items-center 
                    justify-center 
                    cursor-pointer
                    ${ifShowPlayIcon ? 'brightness-50' : ''}
                    h-72
                `}
                onMouseOver={showPlayIcon}
                onMouseLeave={hideShowPlayIcon}
            >
                {/* image */}
                <img
                    src='/images/featuredMovie/FirstContact.jpg'
                    className='box-border rounded-lg relative'
                />
                {/* play icon */}
                <div 
                    className={`
                        absolute 
                        flex 
                        box-border
                        ${ifShowPlayIcon ? 'block':'hidden'}
                    `}>
                    <FaCirclePlay size={40}/>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='text-md font-bold'>First Contact</div>
                <div className='flex flex-row justify-between'>
                    <div className='text-xs font-semibold'>2023 - 1 hr 29 min</div>
                    <div 
                        className='
                            bg-gray-600 
                            text-white 
                            rounded-lg 
                            px-1 
                            text-xs
                            flex
                            items-center
                            justify-center
                        '>
                            PG-13
                    </div>
                </div>
                <div className='text-xs font-semibold text-neutral-500'>
                    Drama · Horror · Sci-Fi
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
