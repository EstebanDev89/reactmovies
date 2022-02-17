import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie, size, title, link }) {
    const imageWitdh = size || 300;    
    const baseImageURL = `${process.env.REACT_APP_MOVIE_IMAGE_BASE_URL}w${imageWitdh}`;
    const image = <div><img className="card__img" src={`${baseImageURL}/${movie?.poster_path}`} alt={movie?.title} loading="lazy"></img></div>;

    return (
        <article className="card" style={{ "width": `${imageWitdh}px`, "height": `${+imageWitdh*1.8}px`}}>
            <div>

                {
                    link
                        ? <Link to={`/details/${movie.id}`}>
                            {image}
                        </Link>

                        : image
                }

            </div>
            <div className="card__footer">
                {title !== 'none' ? <div>{movie?.title}</div> : ''}
                <div>
                    <div className="card__star"></div>
                    <span>{movie?.vote_average ? movie?.vote_average : 0}</span>
                </div>
            </div>
        </article>
    )
}
