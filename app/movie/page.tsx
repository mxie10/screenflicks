'use client'
import React from 'react'
import { useMovies } from '../hooks/useMovies';
import MovieCardType from '../interfaces/MovieCardProps';
import MovieCard from '../component/MovieCard';
import { useRouter } from 'next/navigation';

const MovieScreen = () => {

    const { movies } = useMovies();
    const router = useRouter();

    const handleCardClick = (movie: MovieCardType) => {
        const encodedItem = encodeURIComponent(JSON.stringify(movie));
        router.push(`/moviedetails?encodedItem=${encodedItem}`);
    };

    return (
        <div
            className='
                py-14
            '
        >
            <div 
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-6 
                    gap-4 
                    px-10
                "
            >

                {movies && movies.map((item: MovieCardType,index:number) => {
                    return (
                        <div className='' key={index}>
                            <MovieCard
                                title={item.title}
                                imageSrc={item.imageSrc}
                                year={item.year}
                                length={item.length}
                                type={item.type}
                                rate={item.rate}
                                souce='movieList'
                                onClick={() => handleCardClick(item)}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MovieScreen;
