import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie, size, title, link }) {
    const imageWitdh = size || 'original';
    const baseImageURL = `${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}${imageWitdh}`;
    const image = <div><img src={`${baseImageURL}/${movie?.poster_path}`} alt={movie?.title} loading="lazy"></img></div>;

    return (
        <article>
            <div>

                {

                    link
                        ? <Link to={`/details/${movie.id}`}>
                            {image}
                        </Link>

                        : image
                }

            </div>
            {title !== 'none' ? <div>{movie?.title}</div> : ''}
            <div>
                <div className="star"></div>
                <span>{movie?.vote_average ? movie?.vote_average : 0}</span>
            </div>
        </article>
    )
}
