import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FetchSearchMovie } from 'Services/ApiSerices';
import MoviesList from 'components/MoviesList';
export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const param = searchParams.get('query');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (param) {
      FetchSearchMovie(param).then(resp => setMovies(resp));
      setQuery(param);
    }
    return;
  }, [param]);

  const handleSetQuery = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    if (query.trim() === '') {
      return;
    }
    e.preventDefault();
    setSearchParams({ query });
    FetchSearchMovie(query).then(resp => setMovies(resp));
  };

  return (
    <>
      <SearchForm
        handleSetQuery={handleSetQuery}
        handleSubmit={handleSubmit}
        value={query}
      />
      <MoviesList data={movies} state={{ from: location }} />
    </>
  );
}
