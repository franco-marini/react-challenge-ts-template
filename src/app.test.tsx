import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app';

test('renders ready for the challenge', () => {
  render(<App />);
  const linkElement = screen.getByText(/ready for/i);
  expect(linkElement).toBeInTheDocument();
});
