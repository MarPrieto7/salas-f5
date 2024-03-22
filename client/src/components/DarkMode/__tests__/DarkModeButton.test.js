import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DarkModeButton from '../DarkModeButton';

test('DarkModeButton toggles dark mode', () => {
  const { getByRole } = render(<DarkModeButton />);
  const button = getByRole('button');

  // Verificar que el modo oscuro esté desactivado inicialmente
  expect(document.body.classList.contains('dark')).toBe(false);

  // Simular el clic en el botón para activar el modo oscuro
  fireEvent.click(button);

  // Verificar que el modo oscuro esté activado después de hacer clic en el botón
  expect(document.body.classList.contains('dark')).toBe(true);

  // Simular otro clic en el botón para desactivar el modo oscuro
  fireEvent.click(button);

  // Verificar que el modo oscuro esté desactivado nuevamente
  expect(document.body.classList.contains('dark')).toBe(false);
});
