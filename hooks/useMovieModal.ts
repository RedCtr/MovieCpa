import { create } from 'zustand'

type MovieModalProps = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useMovieModal = create<MovieModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    // onClose: () => set({isOpen: false}),
    onClose: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export default useMovieModal