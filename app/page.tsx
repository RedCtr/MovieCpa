import MovieSlider from '@/components/MovieSlider'
import MovieTrending from '@/components/MovieTrending'
import React from 'react'

export const movies: Movie[] = [
    {
        movieName: 'Transformers: Rise of the Beasts',
        movieImage: 'https://sportshub.cbsistatic.com/i/2023/05/08/42a26a97-714a-46c2-aefe-cbdc7721be66/transformers-rise-of-the-beasts-optimus-primal-poster.jpg',
        resolution: '4k',
        rating: 9.2,
        releaseDate: 2023,
        backgroundImage: 'https://linfotoutcourt.com/wp-content/uploads/2023/06/Rise-of-the-Beasts-01.jpeg',
        id: 102
    },
    {
        movieName: 'Retribution',
        movieImage: 'https://m.media-amazon.com/images/M/MV5BNTEwYTMyNmUtNmU5OS00NTg2LTk4ZjEtOGJlZWViMWFlMjY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://acinetvreview.com/wp-content/uploads/2023/08/Retribution-2023-movie-review.jpg',
        id: 103
    },
    {
        movieName: 'Blue Beetle',
        movieImage: 'https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://www.pixground.com/wp-content/uploads/2023/06/Blue-Beetle-4K-Wallpaper.jpg',
        id: 104
    },
    {
        movieName: 'Gran Turismo',
        movieImage: 'https://m.media-amazon.com/images/M/MV5BMmQ3ZTViYTEtZDUwZS00NjQyLWJmODctN2JhOGVmNTQ5N2ZiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://www.spieltimes.com/wp-content/uploads/2023/07/Everything-to-know-about-Gran-Turismo-movie.png',
        id: 105
    },
    {
        movieName: 'Meg 2: The Trench',
        movieImage: 'https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        resolution: 'HD',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://amc-theatres-res.cloudinary.com/v1690369380/amc-cdn/production/2/movies/69100/69112/MovieStills/330007R5.jpg',
        id: 106
    },
    {
        movieName: 'Ninja Turtles : Teenage Years',
        movieImage: 'https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/07/tmnt-mutant-mayhem-poster-crop.jpg',
        id: 107
    },
    {
        movieName: 'Barbie',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/Barbieposter.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1468C/production/_130369538_barbie1.jpg',
        id: 108
    },
    {
        movieName: 'Oppenheimer',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/oppenheimerposter.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://universalpictures.ca/wp-content/uploads/2022/07/UniversalOPP.jpg',
        id: 109
    },
    {
        movieName: 'Miraculous: Ladybug & Cat Noir',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/catposter.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/miraculous-ladybug-and-cat-noir-the-movie-still.webp',
        id: 110
    },
    {
        movieName: 'Mission: Impossible - Dead Reckoning Part One',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/missionpPoster.jpg',
        resolution: 'HD',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/482/mission-impossible-dead-reckoning-partie-1-photo-critique-1482777.jpg',
        id: 111,
        movieTrailer: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
        movieName: 'Spider-Man: Across the Spider-Verse',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_FMjpg_UX1000_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://cdn-uploads.gameblog.fr/img/news/427229_647def3aa5bc7.jpg',
        id: 112,
        movieTrailer: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
        movieName: 'John Wick: Chapter 4',
        movieImage: 'https://cemamax.com/m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY%40._V1_QL75_UX380_CR0%2c0%2c380%2c562_.jpg',
        resolution: '4K',
        rating: 7.6,
        releaseDate: 2023,
        backgroundImage: 'https://blog.richersounds.com/wp-content/uploads/2023/04/review-john-wick-chapter-4-elevates-the-badass-action-franchise-to-a-new-level.jpg',
        id: 113,
        movieTrailer: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
]

const page = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden font-Ibm bg-[#111111]'>
            <MovieSlider movies={movies} />

            <MovieTrending />

        </div>
    )
}

export default page