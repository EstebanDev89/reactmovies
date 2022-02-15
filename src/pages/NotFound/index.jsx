import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <section className="not-found__section">
          <div className="not-found__images">
            <img loading="lazy" className="not-found__images__image" src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
            <img loading="lazy" className="not-found__images__image" src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
          </div>
          <div className="not-found__titles">
            <h1 className="not-found__titles__title--1">404</h1>
            <h2 className="not-found__titles__title--2">PAGE NOT FOUND</h2>
            <h3 className="not-found__titles__title--3">BACK TO HOME?</h3>
            <Link to="/" className="not-found__link--yes"> YES </Link>
            <a href='https://www.youtube.com/watch?v=G3AfIvJBcGo'
              className="not-found__link"> NO </a>
          </div>
        </section>
      </div>
    </>
  )
}
