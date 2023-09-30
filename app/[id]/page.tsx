import React from 'react'
import { movies } from '../page'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PlayIcon } from '@heroicons/react/24/solid'
import { ArrowDownTrayIcon, BookmarkIcon, FilmIcon, ShareIcon } from '@heroicons/react/24/outline'
import MovieModal from '@/components/MovieModal'
import PlayButton from '@/components/PlayButton'

type PropsRoute = {
    params: {
        id: string
    }
}

const page = ({ params }: PropsRoute) => {
    const movie = movies.find((movie) => movie.id.toString() === params.id)!
    const { movieName, movieImage, releaseDate, resolution, backgroundImage } = movie
    return (
        <div className='relative'>
            <div className=' absolute top-0 right-0 z-0 w-full h-full'>

                <Image
                    className='object-cover opacity-20'
                    style={{
                        aspectRatio: '2/1'
                    }}
                    src={backgroundImage ?? ''}
                    fill
                    alt={`${movieName} poster`} />

                <div className='absolute bottom-0 left-0 right-0 w-full h-full 
                    bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10 ' />
            </div>

            <div className='px-10 py-14'>
                <div className='flex flex-col items-center gap-y-4 md:flex-row md:items-start md:gap-x-12'>
                    <div className='w-[200px] h-[310px] md:w-[320px] md:h-[480px] relative'>
                        <Image
                            className=' object-cover rounded-md drop-shadow-lg'
                            style={{
                                aspectRatio: '1/2'
                            }}
                            src={movieImage}
                            fill
                            alt={`${movieName} poster`} />

                    </div>

                    <div className=' relative flex flex-col items-center justify-center md:items-start md:justify-start gap-y-5 py-1'>

                        <h1 className='text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-lg font-bold text-center md:text-start'>
                            {movieName}
                        </h1>

                        <div className='flex items-center gap-x-4 md:gap-x-6 text-gray-300'>
                            <span className='text-xs md:text-sm'>{releaseDate}</span>
                            <span className='text-xs md:text-sm'>1h 38m</span>
                            <Badge className='px-2 py-1 rounded-md text-xs md:text-sm bg-sky-500 text-slate-900'>
                                {resolution}
                            </Badge>

                        </div>
                        <h2 className='text-gray-300 text-sm md:text-base font-light md:font-normal'>
                            Horror, Comedy, Romance
                        </h2>

                        <div className='flex items-center gap-x-8'>
                            <PlayButton />

                            <BookmarkIcon className='w-6 h-6 text-white' />
                            <ArrowDownTrayIcon className='w-6 h-6 text-white' />
                            <ShareIcon className='w-6 h-6 text-white' />
                            <FilmIcon className='w-6 h-6 text-white' />

                        </div>

                        <p className='mt-6 text-sm md:text-base text-slate-300 max-w-2xl font-normal md:font-medium'>
                            After a highly unusual zombie saves a still-living girl from an attack,
                            the two form a relationship that sets in motion events that might transform the entire lifeless world.
                        </p>

                        <div className='flex items-center gap-x-[70px] md:gap-x-28 mt-4 w-full'>
                            <p className='text-xs md:text-sm text-gray-300 font-normal'>
                                Directed By
                            </p>
                            <p className='text-xs md:text-sm text-slate-300 font-normal'>
                                Jonathan Levine
                            </p>

                        </div>
                        <div className='flex items-center gap-x-[74px] md:gap-x-28 w-full'>
                            <p className='text-xs md:text-sm text-gray-300 font-normal'>
                                Written By
                            </p>
                            <p className='text-xs md:text-sm text-slate-300 font-normal'>
                                Jonathan Levine,Isaac Marion

                            </p>

                        </div>


                    </div>

                </div>

            </div>

            <MovieModal movie={movie} />
        </div>
    )
}

export default page