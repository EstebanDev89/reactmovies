import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../../components/MovieCard';
import useLoadingFetch from '../../hooks/useLoadingFetch';

export default function MovieDetails() {
    const { id } = useParams()
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?language=es-Mx`;

    const [{ response, isLoading, isError }, doLoadingFetch] = useLoadingFetch();

    useEffect(() => {
        doLoadingFetch({ url: movieURL })
    }, [])

    return (
        response
            ? <>
                <MovieCard movie={response} size={300} title="none"></MovieCard>
                <div><span>Sinopsis: </span>{response.overview}</div>
                <div><span>Genero:{response.genres?.map(g => g.name).join(", ")} </span></div>
                {response.homepage
                    ? <div><span><a href={response.homepage}>¿Querés más Info?</a> </span></div>
                    : ''
                }
            </>
            : ''
    )
}
