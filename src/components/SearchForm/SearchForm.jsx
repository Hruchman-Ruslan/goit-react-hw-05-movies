import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Form, Input, Label } from './SearchForm.styled';

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

  const notify = () => toast.success('Success 👌');

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit" onClick={notify}>
        Search
      </Button>
      <Label htmlFor="search">
        <Input type="text" name="search" />
      </Label>

      <ToastContainer />
    </Form>
  );
};
