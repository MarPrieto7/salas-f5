import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    // Verifica que algunos elementos del footer se rendericen ok
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && content.includes('Transparencia');
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && content.includes('Blog');
    })).toBeInTheDocument();
  });
});
