import React, { useState, useEffect, useRef } from 'react';

const Latest = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});
  const [number, setNumber] = useState(null);
  const [latest, setLatest] = useState(null);
  const [date, setDate] = useState('');
  const isInitial = useRef(true);

  useEffect(() => {
    // Checks if it's the initial load and gets latest comic if so
    if (isInitial.current) {
      isInitial.current = false;
      fetchLatest();
    } else {
      fetchData(number);
    }
  }, [number]);

  // Comic fetch functions
  async function fetchLatest() {
    await fetch('https://xkcd.now.sh/?comic=latest')
    .then(res => res.json())
    .then(res => {
      setComic(res);
      setDate(res.month + '/' + res.day + '/' + res.year);
      setNumber(res.num);
      setLatest(res.num);
      setErrors(false);
    })
    .catch(() => setErrors(true));
  }

  async function fetchData(num) {
    await fetch('https://xkcd.now.sh/?comic=' + num)
      .then(res => res.json())
      .then(res => {
        setComic(res);
        setDate(res.month + '/' + res.day + '/' + res.year);
        setErrors(false);
      })
      .catch(() => setErrors(true));
  }

  // Navbar Function
  const changeComic = (num) => {
    if (num < 1 || num > latest) {
      return;
    }
    setNumber(num);
  }

  // Error Handling
  let error;
  if (hasError) {
    error = 'Something went wrong...'
  }

  return ( 
    <div className="box">
      <ul className="comicNav">
        <li><button onClick={() => changeComic(1)}>|&lt;</button></li>
        <li><button onClick={() => changeComic(number - 1)}>&lt; Prev</button></li>
        <li><button onClick={() => changeComic(Math.floor(Math.random() * latest))}>Random</button></li>
        <li><button onClick={() => changeComic(number + 1)}>Next &gt;</button></li>
        <li><button onClick={() => changeComic(latest)}>&gt;|</button></li>
      </ul>
      <h1>{comic.safe_title}</h1>
      <p>{date}</p>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
      <span>{error}</span>
    </div>
  );
}

export default Latest;