import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { PlayIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const MovieItem = ({ movie }: { movie: Movie }) => {
    return (
        <Link
            href={`/${movie.id}`}
            className='flex flex-col items-start gap-y-1 group w-[165px] md:w-[190px] my-[6px] mr-1 cursor-pointer'>
            <div className='w-[165px] md:w-[190px] h-[250px] md:h-[284px] relative'>
                <Image
                    className='object-cover cursor-pointer rounded-md'
                    style={{
                        aspectRatio: '1/2'
                    }}
                    src={movie.movieImage}
                    fill
                    alt={`${movie.movieName} poster`}
                />

                <div className='absolute inset-0 w-full h-full cursor-pointer bg-black  transition duration-300 bg-opacity-0 group-hover:bg-opacity-50'>
                </div>
                <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center'>

                    <Button className='flex items-center justify-center transition-transform scale-0 
                    group-hover:scale-105 duration-300 bg-sky-600 rounded-full p-2 w-14 h-14 hover:bg-sky-700'>
                        <PlayIcon className='text-white w-7 h-7 object-cover' />

                    </Button>
                </div>
                <div className='absolute z-10 top-1 right-1'>
                    <Badge className='px-2 py-1 rounded-md bg-sky-500 text-slate-900'>
                        {movie.resolution}
                    </Badge>


                </div>

            </div>

            <h2 className='text-sm md:text-base font-medium text-white py-1 max-w-[190px] line-clamp-1
            transition group-hover:text-sky-600'>
                {movie.movieName}
            </h2>
            <div className='flex items-center justify-between w-full'>
                <span className='text-gray-300 text-xs md:text-sm font-light md:font-normal'>
                    {movie.releaseDate}
                </span>
                <Badge variant={'outline'} className=' rounded-md text-gray-400 border-gray-400'>
                    {movie.type ?? 'Movie'}
                </Badge>


            </div>

        </Link>
    )
}

export default MovieItem