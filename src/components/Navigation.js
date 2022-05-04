import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink
        to="/goit-react-hw-05-movies"
        className="NavLink"
        style={{ margin: '15px' }}
      >
        Home
      </NavLink>
      <NavLink exact to="/movies" className="NavLink">
        Movies
      </NavLink>
    </>
  );
}
