import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from 'Services/ApiSerices';

export default function MovieReviews({ data }) {
  const params = useParams();

  const [reviews, setReviews] = useState();

  useEffect(() => {
    FetchMovieDetails(params.id, '/reviews').then(res =>
      setReviews(res.results)
    );
  }, [params.id]);

  return (
    <div>
      {reviews && reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>

              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No Reviews</h2>
      )}
    </div>
  );
}
