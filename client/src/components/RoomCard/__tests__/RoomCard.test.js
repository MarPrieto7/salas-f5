import React from 'react';
import { render } from '@testing-library/react';
import RoomCard from '../RoomCard';

describe('RoomCard Component', () => {
  test('renders RoomCard component without elements', () => {
    render(<RoomCard />);
    // Verifica que el componente RoomCard se renderice sin elementos
    expect(document.querySelector('.room-card-article')).toBeInTheDocument();
  });
});
