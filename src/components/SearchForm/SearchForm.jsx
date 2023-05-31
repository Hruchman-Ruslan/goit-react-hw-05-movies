import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.search.value.toLowerCase().trim();

    if (!query) {
      return;
    }

    setSearchParams({ query });
  };

  const notify = () => toast('Wow so easy!');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input type="text" name="search" />
      </label>
      <button type="submit" onClick={notify}>
        Search
      </button>
      <ToastContainer />
    </form>
  );
};
