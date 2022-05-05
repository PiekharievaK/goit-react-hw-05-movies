import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to="/" className="NavLink" style={{ margin: '15px' }}>
        Home
      </NavLink>
      <NavLink to="/movies" className="NavLink">
        Movies
      </NavLink>
    </>
  );
}
