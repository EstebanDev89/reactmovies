// import logo from './logo.svg';
import Loading from './components/Loading'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { loadingContext } from './contexts/LoadingContext'
import './App.css';

function App() {
  const { isLoading } = useContext(loadingContext)

  return (
    <>
      <BrowserRouter>
        {isLoading ? <Loading /> : null}
        <header>
          <Link to="/"> Home </Link>
          <Link to="/other"> NotFound </Link>
        </header>
        <main>

          <Routes>
            {/* <Route path="/playground" element={<Loading />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
            {/* use replace for non url redirection and support back page on browser */}
          </Routes>

        </main>
        <footer>
          REDES SOCIALES
        </footer>
      </BrowserRouter>

    </>
  );
}

export default App;
