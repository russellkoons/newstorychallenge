import React, { useState, useEffect } from 'react';

const Latest = () => {
  const [hasError, setErrors] = useState(false);
  const [comic, setComic] = useState({});

  useEffect(() => {
    async function fetchData() {
      await fetch('https://xkcd.now.sh/?comic=latest')
        .then(res => res.json())
        .then(res => setComic(res))
        .catch(() => setErrors({ hasErrors: true }));
    }

    fetchData();
  }, []);

  return ( 
    <div>
      <img src={comic.img} />
    </div>
  );
}

export default Latest;