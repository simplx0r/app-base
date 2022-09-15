import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '.';

test('renders without crashing', async () => {
  render(<App />);

  expect(await screen.findByTestId('app')).toBeInTheDocument();
});
