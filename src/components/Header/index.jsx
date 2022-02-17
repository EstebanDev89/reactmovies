import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/"><h1 className="header__logo">MovieApp</h1></Link>
                <input className="header__menu-btn" type="checkbox" id="menu-btn" />
                <label className="header__menu-icon" for="menu-btn"><span className="header__navicon"></span></label>
                <ul className="header__menu">
                    <li className="header__li" ><Link className="header__link" to="/populares">Populares</Link></li>
                    <li className="header__li" ><Link className="header__link" to="/cartelera">En cartelera</Link></li>
                    <li className="header__li" ><Link className="header__link" to="/">En Cines</Link></li>
                    {
                        false
                            ? <li className="header__li" ><a className="header__link" to="/logout">Logout</a></li>
                            : <li className="header__li" ><a className="header__link" to="/login">Login</a></li>
                    }
                </ul>
            </nav>
        </header>
    )
}