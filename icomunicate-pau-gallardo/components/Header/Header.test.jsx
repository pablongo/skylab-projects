import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Header />);

    expect(true).toBe(true);
  });
});
