import { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [q, setQ] = useState();

  const submitHandler = (e) => {};

  return (
    <form className='search__form' onSubmit={submitHandler}>
      <input
        type='search'
        placeholder='Search'
        onChange={(e) => setQ(e.target.value)}
        value={q}
        className='search__input'
        autoComplete='off'
      />
    </form>
  );
};
export default Search;
