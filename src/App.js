import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/album.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
