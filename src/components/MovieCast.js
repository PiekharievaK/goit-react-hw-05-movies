import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from 'Services/ApiSerices';

export default function MovieCast({ data }) {
  const params = useParams();

  const [cast, setCast] = useState();

  useEffect(() => {
    FetchMovieDetails(params.id, '/credits').then(res => setCast(res.cast));
  }, [params.id]);

  return (
    <div>
      {cast &&
        (cast.length > 0 ? (
          <ul className="CastList">
            {cast.map(actor => (
              <li key={actor.id} className="CastItem">
                <h2>{actor.name}</h2>
                <div className="imageBox">
                  <img
                    className="CastPhoto"
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200/` +
                          actor.profile_path
                        : 'https://www.abbeysurestart.com/wp-content/uploads/2021/03/blank-profile.png'
                    }
                    alt={actor.name}
                    width="200px"
                  ></img>
                </div>
                <p>
                  Character: {actor.character ? actor.character : 'unknown'}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Information</h2>
        ))}
    </div>
  );
}
