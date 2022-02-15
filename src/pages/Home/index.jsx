import { MoviesActions } from '../../actions/moviesActions';
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import moviesReducer, { moviesInitialState } from '../../reducers/moviesReducer';

export default function Home() {
    const token = process.env.REACT_APP_MOVIE_PUBLIC_TOKEN;
    const server = process.env.REACT_APP_MOVIE_BASE_API_URL;
    const nowPlayingURL = `${server}/3/movie/popular?language=es-MX&page=1&region=AR`;

    const [moviesState, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)

    useEffect(() => {
        // Loading
        fetch(nowPlayingURL, { headers: { authorization: `bearer ${token}` } })
            .then(res => {
                //StopLoading
                return res.json()
            })
            .then(data => {
                dispatchMovies({ type: MoviesActions.RefreshMovies, payload: data })
            })

    }, [])

    return (
        <>
            {console.log(moviesState)}
            <Link to="/"> Home </Link>
            <Link to="/movie-details/1"> Details </Link>
            <Link to="/other"> NotFound </Link>
        </>
    )
}
