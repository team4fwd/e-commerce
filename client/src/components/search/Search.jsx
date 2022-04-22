import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = ({ onClose }) => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (q.trim()) {
      navigate(`/search/${q}`);
    } else {
      navigate('/');
    }
    onClose();
  };

  return (
    <>
      <form className='search__form' onSubmit={submitHandler}>
        <input
          type='search'
          placeholder='Search'
          onChange={(e) => setQ(e.target.value)}
          value={q}
          className='search__input'
          autoComplete='off'
        />
        <button className='search__icon-btn'>
          <MdSearch className='search__icon' />
        </button>
      </form>
    </>
  );
};
export default Search;
