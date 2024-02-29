import React from 'react'
import MovieCard from '../MovieCard';
import { RiMovieLine } from "react-icons/ri";

const FeaturedFilms = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div
                className='
                    flex 
                    flex-row 
                    items-center 
                    justify-between
                    border-b-2
                    py-2
                '
            >
                <div className='flex flex-row gap-1 items-center'>
                    <RiMovieLine size={30} className='rouded-lg' />
                    <div className='text-xl text-black font-bold'>Featured Films</div>
                </div>
                <div className='text-neutral-500'>View all</div>
            </div>
            <div className='mt-2'>
                <MovieCard />
            </div>
        </div>
    )
}

export default FeaturedFilms;
