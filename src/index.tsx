import React, { StrictMode, createElement } from 'react';
import 'uno.css';
import { createRoot } from 'react-dom/client';
import App from 'app';
import { setup } from 'goober';

const container = document.getElementById('root');

setup(React.createElement);
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
