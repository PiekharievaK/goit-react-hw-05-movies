// const KEY = '718b7347396ac1052bb7bdc76b11dbfa';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import HomePage from '../Views/HomePage';
// import MoviesPage from '../Views/MoviesPage';
// import { MovieDetailsPage } from '../Views/MovieDetailsPage';
// import Navigation from './Navigation';
// import { MovieCast } from './MovieCast';
// import { MovieReviews } from './Reviews';

const HomePage = lazy(() =>
  import('../Views/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../Views/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../Views/MovieDetailsPage' /* webpackChunkName: "movie-detalis-page" */
  )
);
const Navigation = lazy(() =>
  import('./Navigation' /* webpackChunkName: "navigation" */)
);
const MovieCast = lazy(() =>
  import('./MovieCast' /* webpackChunkName: "cast" */)
);
const MovieReviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
