"use client"
import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import useMovieModal from '@/hooks/useMovieModal'
import { Button } from './ui/button'

const PlayButton = () => {
    const { onOpen } = useMovieModal()
    return (
        <Button
            onClick={() => onOpen()}
            className='flex justify-center items-center gap-x-1 px-3 py-1 bg-orange-600 
            text-slate-900 font-semibold transition hover:bg-orange-700'>
            <PlayIcon className='w-5 h-5' />
            <span>Play</span>

        </Button>
    )
}

export default PlayButton