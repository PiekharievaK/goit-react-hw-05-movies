import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

export default function MoviesList({ data }) {
  const location = useLocation();

  return (
    <div>
      {data && ( data.length>0?
        <ul>
          {data.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
        :<h2>No Results</h2>
      )}
    </div>
  );
}

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};
