import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Latest from './Latest';
import Search from './Search';
import Logo from './assets/logo.png'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="box">
        <img src={Logo} alt="xkcd.com logo" height="83" width="185" />
        <span id="slogan">A webcomic of romance,<br /> sarcasm, math, and language.</span>
      </div>
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
