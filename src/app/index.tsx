import React from 'react';
import Routing from 'pages';
import { Header } from './header';

import main from './app.module.scss';

const links = [{
  name: 'Yandex',
  url: 'https://yandex.ru',
}];
function App() {
  return (
    <div className={main.app}>
      <Header links={links} />
      <Routing />
    </div>
  );
}

export default App;
