import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

export default function MoviesList({ data }) {
  const location = useLocation();

  return (
    <div>
      {data && (
        <ul>
          {data.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};
