import React from 'react'
import MovieItem from './MovieItem'
import { movies } from '@/app/page'

const MovieTrending = () => {
    return (
        <div className='px-4 md:px-6 py-6 md:py-12'>
            <div className='flex flex-col items-start gap-y-3'>
                <div>

                    <h1 className='text-sky-500 text-xl md:text-2xl tracking-wide font-light md:font-normal'>
                        Trending :
                    </h1>
                    <div className='bg-slate-800 h-[1px] w-8' />

                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3'>
                    {
                        movies.map((movie) => (
                            <MovieItem key={movie.movieName} movie={movie} />


                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default MovieTrending