"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Badge } from '@/components/ui/badge';
import { PlayIcon, StarIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';

const MovieSlider = ({ movies }: { movies: Movie[] }) => {
    return (

        <Swiper
            // install Swiper modules
            effect='fade'
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation
            loop={true}
            grabCursor
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className='w-full h-[360px] md:h-screen mySwiper'
        >
            {
                movies.map((movie, index) => (
                    <SwiperSlide
                        key={movie.movieName}

                        className=''>
                        <div className='relative w-full h-[360px] md:h-screen'>
                            <Image
                                className=' object-cover aspect-video'
                                src={movie.backgroundImage ?? ''}
                                fill
                                priority
                                alt={`${movie.movieName} poster`}
                            />

                            <div className='absolute bottom-0 left-0 right-0 w-full h-[250px] md:h-[400px] 
                    bg-gradient-to-t from-[#111111] to-transparent z-10 ' />

                            <div className='absolute left-6 bottom-10 md:left-14 md:bottom-14 z-20 
                    flex flex-col items-start justify-start gap-y-4'>

                                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                                font-semibold max-w-xs md:max-w-xl text-white line-clamp-3 py-1'
                                    style={{
                                        filter: "drop-shadow(2px 2px 8px black)",

                                    }}>
                                    {movie.movieName}
                                </h1>
                                <div className='flex items-center gap-x-4'>
                                    <Badge className='px-2 py-1 rounded-md bg-sky-500 text-slate-900'>{movie.resolution}</Badge>
                                    <div className='flex items-center'>
                                        <StarIcon className='w-3 h-3 text-white' />
                                        <span className='text-white text-xs md:text-sm font-semibold tracking-tighter'>{movie.rating}</span>

                                    </div>
                                    <span className='text-gray-200 text-xs md:text-sm font-light md:font-normal'>{movie.releaseDate}</span>

                                </div>

                                <Button className='w-auto px-3 py-1 md:px-4 md:py-2 mt-4 flex items-center justify-center bg-white text-[#0f172a] 
                                gap-x-1 md:gap-x-3 hover:scale-95 transition-transform font-medium text-sm md:text-base lg:text-lg'>
                                    <PlayIcon className='w-6 h-6' />
                                    <span className=''>Watch Now</span>
                                </Button>



                            </div>

                        </div>
                    </SwiperSlide>

                ))
            }
        </Swiper>
    )
}

export default MovieSlider