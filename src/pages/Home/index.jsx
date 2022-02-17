import { MoviesActions } from '../../actions/moviesActions';
import MovieCard from '../../components/MovieCard';
import React, { useEffect, useReducer } from 'react'
import moviesReducer, { moviesInitialState } from '../../reducers/moviesReducer';
import './styles.css'

import useLoadingFetch from '../../hooks/useLoadingFetch';

export default function Home() {
    const server = process.env.REACT_APP_MOVIE_BASE_API_URL;
    const nowPlayingURL = `${server}/3/movie/popular?language=es-MX&page=1&region=AR`;

    const [moviesState, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)

    const [{ response, isLoading, isError }, doLoadingFetch] = useLoadingFetch();

    useEffect(() => {
        doLoadingFetch({ url: nowPlayingURL })
    }, [])

    useEffect(() => {
        dispatchMovies({ type: MoviesActions.RefreshMovies, payload: response || {} });
    }, [response])

    return (
        <>
            <section>
                {
                    moviesState?.movies?.map(
                        movie => <MovieCard key={movie.id} movie={movie} size="w300" link={true}></MovieCard>
                    )
                }
            </section>

        </>
    )
}
