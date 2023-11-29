import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return (
    <div className="MarketPlacesearch-box">
      <input
        type="text"
        placeholder="Search our range of products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={submitHandler}>
        <FaSearch />
      </button>
    </div>
  );
}