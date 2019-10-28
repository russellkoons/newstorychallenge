import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Latest from './Latest';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <button className="latest">Latest</button>
        </Link>
        <Link to="/search">
          <button className="search">Search</button>
        </Link>
      </div>
      <Route exact path="/" component={Latest} />
      <Route exact path="/search" component={Search} />
    </BrowserRouter>
  );
}

export default App;
