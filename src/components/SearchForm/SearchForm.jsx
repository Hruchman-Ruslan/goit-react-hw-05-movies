import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.search.value.toLowerCase().trim();

    if (!query) {
      return;
    }

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input type="text" name="search" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
