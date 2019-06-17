import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Songs from '../pages/Songs';
import Artist from '../pages/Artist';
import Header from './Header';

function Main() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Songs} />
        <Route path="/artists" component={Artist} />
      </main>
    </Router>
  );
}

export default Main;
