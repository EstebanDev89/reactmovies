import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Link to="/"> Home </Link>
            <Link to="/movie-details/1"> Details </Link>
            <Link to="/other"> NotFound </Link>
        </>
    )
}
