import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useLoadingFetch from '../../hooks/useLoadingFetch';

export default function MovieDetails() {
    const { id } = useParams()
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?language=es-Mx`;

    const [{ response, isLoading, isError }, doLoadingFetch] = useLoadingFetch();

    useEffect(() => {
        doLoadingFetch({ url: movieURL })
    }, [])

    return (
        <>
            {console.log(response, isLoading, isError)}
            < div > MovieDetails for id {id}</div >
        </>
    )
}
