import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Songs from '../pages/Songs';
import Artist from '../pages/Artist';
import ArtistsList from '../pages/ArtistsList';
import Header from './Header';

function Main() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Songs} />
        <Route exact path="/artists" component={ArtistsList} />
        <Route path="/artists/:id" component={Artist} />
      </main>
    </Router>
  );
}

export default Main;
