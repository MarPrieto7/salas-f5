import React, { useState, useEffect } from 'react';
import './DarkModeButton.css'; 

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Obtener el estado del modo oscuro desde localStorage, si está definido
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    // Guardar el estado actual del modo oscuro en localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Aplicar el modo oscuro al cargar la página
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='dark-mode'>
        <button className={`switch ${isDarkMode ? 'active' : ''}`} onClick={handleToggleDarkMode}>
    <span><i class="fa-solid fa-sun"></i></span>
      <span><i class="fa-solid fa-moon"></i></span>
    </button>
    </div>
  
  );
};

export default DarkModeButton;

