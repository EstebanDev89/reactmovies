import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const { id } = useParams()
    return (
        <div>MovieDetails for id {id}</div>
    )
}
