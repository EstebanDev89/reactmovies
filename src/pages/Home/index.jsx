import { MoviesActions } from '../../actions/moviesActions';
import { loadingContext } from '../../contexts/LoadingContext'
import React, { useEffect, useReducer, useContext } from 'react'
import moviesReducer, { moviesInitialState } from '../../reducers/moviesReducer';
import './styles.css'
import { Link } from 'react-router-dom'

export default function Home() {
    const token = process.env.REACT_APP_MOVIE_PUBLIC_TOKEN;
    const server = process.env.REACT_APP_MOVIE_BASE_API_URL;
    const nowPlayingURL = `${server}/3/movie/popular?language=es-MX&page=1&region=AR`;
    const imageWitdh = 'w300';
    const baseImageURL = `${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${imageWitdh}`;

    const [moviesState, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)
    const { setLoading } = useContext(loadingContext);

    useEffect(() => {
        setLoading(true)
        fetch(nowPlayingURL, { headers: { authorization: `bearer ${token}` } })
            .then(res => {
                setLoading(false)
                return res.json()
            })
            .then(data => {
                dispatchMovies({ type: MoviesActions.RefreshMovies, payload: data })
            })
    }, [])

    let movie = {}

    return (
        <>
            {console.log(moviesState)}
            {
                moviesState.movies.map(
                    movie =>
                        <section>
                            <article>
                                <div>{movie?.title}</div>
                                <div>
                                    <Link to={`/details/${movie.id}`}>
                                        <div>
                                            <img src={`${baseImageURL}${movie?.poster_path}`} alt={movie?.title} loading="lazy"></img>
                                        </div>
                                    </Link>

                                </div>
                                <div>
                                    <div className="star"></div>
                                    <span>{movie?.vote_average ? movie?.vote_average : 0}</span>
                                </div>
                            </article>
                        </section>
                )
            }

        </>
    )
}
