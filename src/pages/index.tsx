import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './calculator';

const routes = {
  calc: '/calc',
};

function Routing() {
  const { calc } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={calc} element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
