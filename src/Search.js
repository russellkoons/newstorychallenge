import React, { useState, useEffect, useRef } from 'react';

const Search = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});
  const [number, setNumber] = useState(null);
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
    } else {
      fetchData(number);
    }
  }, [number]);

  async function fetchData(num) {
    await fetch('https://xkcd.now.sh/?comic=' + num)
      .then(res => res.json())
      .then(res => setComic(res))
      .catch(() => setErrors({ hasError: true }));
  }

  const submitNum = event => {
    event.preventDefault();
    setNumber(document.getElementsByClassName('searchInput')[0].value);
  }

  if (hasError) {
    return (
      <div>
        <p>Something went wrong...</p>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={submitNum}>
        <input type="number" min="1" max="2220" className="searchInput" />
        <input type="submit" className="searchSubmit" />
      </form>
      <h1>{comic.safe_title}</h1>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
    </div>
  )
}

export default Search;