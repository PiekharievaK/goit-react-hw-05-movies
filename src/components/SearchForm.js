import PropTypes from 'prop-types';
export function SearchForm({ handleSetQuery, handleSubmit, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleSetQuery} value={value} />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
