import React from 'react';
import { Routing } from 'pages';
import { Header } from './header';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
