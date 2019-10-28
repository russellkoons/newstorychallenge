import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});
  const [number, setNumber] = useState(2220);

  useEffect(() => {
    fetchData(number);
  }, [number]);

  async function fetchData(num) {
    await fetch('https://xkcd.now.sh/?comic=' + num)
      .then(res => res.json())
      .then(res => {
        setComic(res);
        setErrors(false);
      })
      .catch(() => setErrors(true));
  }

  const changeComic = (num) => {
    if (num < 1 || num > 2220) {
      return;
    }
    setNumber(num);
  }

  let error;

  if (hasError) {
    error = 'Something went wrong...'
  }

  return ( 
    <div className="box">
      <ul className="comicNav">
        <li><button onClick={() => changeComic(1)}>|&lt;</button></li>
        <li><button onClick={() => changeComic(number - 1)}>&lt; Prev</button></li>
        <li><button onClick={() => changeComic(Math.floor(Math.random() * 2220))}>Random</button></li>
        <li><button onClick={() => changeComic(number + 1)}>Next &gt;</button></li>
        <li><button onClick={() => changeComic(2220)}>&gt;|</button></li>
      </ul>
      <h1>{comic.safe_title}</h1>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
      <span>{error}</span>
    </div>
  );
}

export default Latest;