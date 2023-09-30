"use client"
import React, { useEffect, useRef } from 'react'
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useMovieModal from '@/hooks/useMovieModal';
// import ReactPlayer from 'react-player'
import { cn } from '@/lib/utils';

import Plyr, { APITypes } from 'plyr-react'
import "plyr-react/plyr.css"
import { Button } from './ui/button';

const MovieModal = ({ movie }: { movie: Movie }) => {

    const { onClose, isOpen } = useMovieModal()

    const playerRef = useRef<APITypes | null>(null)
    return (

        <div className={cn(`justify-center items-center fixed inset-0 z-50 overflow-x-hidden 
overflow-y-auto bg-zinc-900/90 transition duration-500`,
            isOpen ? "flex" : "hidden"
        )}>
            <div className=' relative w-auto mx-auto max-w-2xl rounded-md overflow-hidden'>

                <div className={cn(`transition-transform duration-500 relative bg-zinc-900 drop-shadow-md`,
                    isOpen ? "scale-100" : "scale-0"
                )}>
                    <div className="relative h-auto w-full mx-2 md:mx-0 md:w-[650px] rounded-lg">

                        <Plyr
                            // ref={playerRef}
                            source={{
                                type: 'video',
                                sources: [{
                                    src: `${movie.movieTrailer}`,
                                    provider: 'html5'
                                }],
                                poster: `${movie.backgroundImage}`,
                                previewThumbnails: {
                                    src: `${movie.backgroundImage}`
                                }

                            }}
                            width='100%'
                            height='100%'
                            options={{
                                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                                // autoplay: true,
                                muted: true,
                                volume: 0.1,
                                clickToPlay: true,
                                previewThumbnails: {
                                    src: `${movie.backgroundImage}`,
                                    enabled: true
                                }
                            }}

                        />

                        {/* <ReactPlayer
                    width='100%'
                    height='100%'
                    url={movie.movieTrailer}
                    playing
                    playIcon={
                        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                            <Button className='relative flex items-center justify-center bg-sky-600 
                        rounded-full p-2 w-16 h-16 hover:bg-sky-700 transition'>
                                <PlayIcon className='text-white w-9 h-9 ' />

                            </Button>
                        </div>
                    }
                    controls
                    light={
                        <div className='relative'>

                            <img
                                src={movie.backgroundImage ?? ''}
                                alt={`${movie.movieName} Thumbnail`} />
                            <div className='absolute bottom-0 left-0 right-0 w-full h-full bg-[#111111]/30' />

                        </div>
                    }
                    pip // support picture in picture
                    loop
                    volume={0}
                    muted
                /> */}
                        <div
                            onClick={() => onClose()}
                            className="absolute cursor-pointer top-3 right-3 w-6 h-6 rounded-full 
                    bg-black/70 flex justify-center items-center"
                        >
                            <XMarkIcon className="text-white w-5 h-5" />
                        </div>

                    </div>
                </div>

            </div>

        </div>



    )
}

export default MovieModal