import { MoviesActions } from '../../actions/moviesActions';
import React, { useEffect, useReducer } from 'react'
import moviesReducer, { moviesInitialState } from '../../reducers/moviesReducer';
import './styles.css'
import { Link } from 'react-router-dom'
import useLoadingFetch from '../../hooks/useLoadingFetch';

export default function Home() {
    const server = process.env.REACT_APP_MOVIE_BASE_API_URL;
    const nowPlayingURL = `${server}/3/movie/popular?language=es-MX&page=1&region=AR`;
    const imageWitdh = 'w300';
    const baseImageURL = `${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${imageWitdh}`;

    const [moviesState, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)

    const [{ response, isLoading, isError }, doLoadingFetch] = useLoadingFetch();

    useEffect(() => {
        doLoadingFetch({ url: nowPlayingURL })
    }, [])

    useEffect(() => {
        dispatchMovies({ type: MoviesActions.RefreshMovies, payload: response });
    }, [response])

    return (
        <>
            <section>
                {
                    moviesState?.movies?.map(
                        movie =>
                            <article key={movie.id}>
                                <div>
                                    <Link to={`/details/${movie.id}`}>
                                        <div>
                                            <img src={`${baseImageURL}${movie?.poster_path}`} alt={movie?.title} loading="lazy"></img>
                                        </div>
                                    </Link>

                                </div>
                                <div>{movie?.title}</div>
                                <div>
                                    <div className="star"></div>
                                    <span>{movie?.vote_average ? movie?.vote_average : 0}</span>
                                </div>
                            </article>
                    )
                }
            </section>

        </>
    )
}
