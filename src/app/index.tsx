import React from 'react';
import Routing from 'pages';
import Header from './header';

import './index.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
