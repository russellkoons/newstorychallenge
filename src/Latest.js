import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});

  useEffect(() => {
    async function fetchData() {
      await fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .then(res => setComic(res))
        .catch(() => setErrors({ hasError: true }));
    }

    fetchData();
  }, []);

  let error;

  if (hasError) {
    error = 'Something went wrong...'
  }

  return ( 
    <div>
      <h1>{comic.safe_title}</h1>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
      <span>{error}</span>
    </div>
  );
}

export default Latest;