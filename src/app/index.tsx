import React from 'react';
import { Routing } from 'pages';
import { Header } from './header';
import './app.scss';
import { withRouter } from './providers';

function App() {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  );
}

export default withRouter(App);
