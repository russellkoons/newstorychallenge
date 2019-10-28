import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});
  const [number, setNumber] = useState(2220);

  useEffect(() => {
    async function fetchData(num) {
      await fetch('https://xkcd.now.sh/?comic=' + num)
        .then(res => res.json())
        .then(res => setComic(res))
        .catch(() => setErrors({ hasError: true }));
    }

    fetchData(number);
  }, [number]);

  let error;

  if (hasError) {
    error = 'Something went wrong...'
  }

  return ( 
    <div className="box">
      <h1>{comic.safe_title}</h1>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
      <span>{error}</span>
    </div>
  );
}

export default Latest;