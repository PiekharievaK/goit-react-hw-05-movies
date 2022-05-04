import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { FetchMovieDetails } from 'Services/ApiSerices';

export default function MovieDetailsPage({ data }) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPath = location.state.from;

  const onBack = () => {
    navigate(prevPath);
  };

  const [movie, setMovie] = useState();
  useEffect(() => {
    FetchMovieDetails(params.id).then(movie => setMovie(movie));
  }, [params.id]);
  return (
    <div>
      {movie && (
        <>
          <button onClick={onBack}>Go Back</button>
          <div className="MovieDetailsInfo">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/` + movie.poster_path
                  : 'https://static.thenounproject.com/png/3674270-200.png'
              }
              alt={movie.title}
            />
            <div className="MovieInfoTextContainer">
              <h2>{movie.original_title}</h2>
              <p>{`Rating ${movie.vote_average}`}</p>
              <h3>Owerview:</h3>
              <p>{movie.overview}</p>

              <div>
                <strong>Ganres: </strong>
                {movie.genres.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2>Additional information</h2>
            <NavLink to="cast" state={{ from: prevPath }} className="NavLink">
              Cast
            </NavLink>
            <NavLink to="reviews" state={{ from: prevPath }} className="NavLink">
              Review
            </NavLink>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
