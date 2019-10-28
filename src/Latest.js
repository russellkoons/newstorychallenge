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

  if (hasError) {
    return (
      <div>
        <p>Something went wrong...</p>
      </div>
    )
  }

  return ( 
    <div>
      <h1>{comic.safe_title}</h1>
      <img src={comic.img} className="latestImage" alt={comic.title} title={comic.alt} />
    </div>
  );
}

export default Latest;