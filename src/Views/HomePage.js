import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from '../Services/ApiSerices';
import MoviesList from 'components/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <MoviesList data={movies} />
    </>
  );
}
