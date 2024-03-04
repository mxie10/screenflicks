'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MovieCardType from '../interfaces/MovieCardProps';
import { FaStar } from "react-icons/fa";

interface MovieDetailsScreenProps {
    movieDetails: MovieCardType;
}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (props) => {
    const searchParams = useSearchParams();
    const encodedItem = searchParams.get('encodedItem');
    const decodedItem = encodedItem ? JSON.parse(decodeURIComponent(encodedItem as string)) : null;
    console.log(encodedItem);

    return (
        <div
            className="flex flex-col relative min-h-screen"
        >
            <div
                className='
                    h-56
                    md:h-48
                    w-full 
                    bg-gradient-to-r  
                    from-red-900 
                    via-brown-600 
                    to-blue-700 
                    absolute 
                '
            >

            </div>
            <div
                className='
                    flex 
                    flex-row 
                    py-20 
                    px-10
                    lg:px-20 
                    z-20 
                    gap-5

                '
            >
                <div
                    className='
                        w-3/12
                        md:w-5/12
                        lg:w-2/12
                        hidden
                        lg:block
                    '
                >
                    <img
                        src='/images/featuredMovie/inThisCorner.jpg'
                        className='
                            object-contain
                            
                        '
                    />
                </div>
                <div
                    className='
                        flex
                        flex-col
                    '
                >
                    <div
                        className='
                            text-white
                            font-bold
                            text-2xl
                        '
                    >
                        {decodedItem.title}
                    </div>
                    <div className='flex flex-row gap-2 mt-1'>
                        {
                            decodedItem.type.map((item:string,index:number)=>{
                                return (
                                    <div
                                        className='
                                            bg-neutral-500
                                            text-white
                                            p-1
                                            rounded-lg
                                            text-xs
                                        '
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row text-white gap-2 mt-3'>
                        <FaStar style={{ color: 'yellow' }}/>
                        <FaStar style={{ color: 'yellow' }}/>
                        <FaStar style={{ color: 'yellow' }}/>
                        <FaStar style={{ color: 'yellow' }}/>
                        <FaStar style={{ color: 'yellow' }}/>
                    </div>
                    {/* cast */}
                    <div 
                        className='
                            flex 
                            flex-row 
                            gap-1
                            text-neutral-500 
                            mt-8
                            hidden
                            md:block
                            md:text-md
                            lg:text-base
                        '
                    >
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {decodedItem.actors.map((actor:string,index:number)=>{
                                return (
                                    <div>{actor}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='text-neutral-500 md:text-md lg:text-base mt-14 md:mt-0 lg:mt-0'>
                        <span className='font-bold'>Breif:   </span>{decodedItem.description}         
                    </div>
                    {/* watch button */}
                    <div
                        className='
                            bg-orange-500
                            p-2
                            rounded-lg
                            font-bold
                            text-white
                            w-full
                            lg:w-1/5
                            text-center
                            mt-2
                            lg:mt-10
                        '
                    >
                        Watch Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsScreen;
