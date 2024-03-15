import React, { useState } from 'react';
import './ReservationView.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [roomName, setRoomName] = useState('');

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDateString(formatDate(date));
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    // Aquí actualizamos el nombre de la sala seleccionada
    if (event.target.value === 'Sala Hedy Lamarr') {
      setRoomName('¡Has reservado tu Sala Conferencias!');
    } else if (event.target.value === 'Sala Mary Lee') {
      setRoomName('¡Has reservado tu Sala Mary Lee!');
    } else if (event.target.value === 'Sala Only') {
      setRoomName('¡Has reservado tu Sala Only!');
    } else {
      setRoomName('');
    }
  };

  return (
    <main>
      <h1 className='title-main'>Reserva tu Sala</h1><br></br>
      <section className="main-section">
        <aside>
          <h2>Seleccione tipo de sala</h2>
          <select value={selectedRoom} onChange={handleRoomChange}>
            <option value="">Seleccione su sala</option>
            <option value="Sala Hedy Lamarr">Sala Hedy Lamarr</option>
            <option value="Sala Mary Lee">Sala Mary Lee</option>
            <option value="Sala Only">Sala Only</option>
          </select>
          {/* Añadir espacio entre los títulos */}
            <div style={{ marginBottom: '20px' }}></div>
          <h2>Seleccione su hora</h2>
          <input 
            type="time" 
            value={selectedTime} 
            onChange={handleTimeChange} 
            min="09:00" 
            max="21:00" 
          />        
          </aside>
        <article>
          {/* Añadir espacio entre los títulos */}
          <div style={{ marginBottom: '20px' }}></div>
          <header>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
            />
          </header>
          <section>
            <ul className="days">
              <li>Do</li>
              <li>Lu</li>
              <li>Ma</li>
              <li>Mi</li>
              <li>Ju</li>
              <li>Vi</li>
              <li>Sa</li>
            </ul>
            <ul className="dates">
              {daysInMonth.map((day, index) => (
                <li key={index} onClick={() => handleDateChange(day)}>
                  {day.getDate()}
                </li>
              ))}
            </ul>
          </section>

          <div className="selected-details">
            {roomName && (
              <div>
                <p>¡Has reservado tu {selectedRoom}!</p>
                <p>{selectedDateString}</p>
                <p>{selectedTime}</p>
              </div>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default ReservationView;
