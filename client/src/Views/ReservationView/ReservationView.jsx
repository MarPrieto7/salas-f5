// Calendar.js
import React, { useState } from 'react';
import './ReservationView.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

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
    return date.toLocaleDateString('en-US', options);
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
  };

  return (
    <main>
      <h1>Reserva de Sala</h1>
      <section className="calendar-container">
        <article className="calendar">
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
          <div className="selected-date">
            Fecha Seleccionada: {selectedDateString}
          </div>
        </article>
        <article className="time-picker">
          <header>
            <h2>Horario</h2>
          </header>
          <input type="time" value={selectedTime} onChange={handleTimeChange} />
          <div className="selected-time">
            Hora Seleccionada: {selectedTime}
          </div>
        </article>
        <article className="room-selector">
          <header>
            <h2>Sala</h2>
            <select value={selectedRoom} onChange={handleRoomChange}>
              <option value="">Seleccione su sala</option>
              <option value="Sala Hedy Lamarr">Sala Hedy Lamarr</option>
              <option value="Sala Mary Lee">Sala Mary Lee</option>
              <option value="Sala Only">Sala Only</option>
            </select>
            <div className="selected-room">
              Tipo de Sala Seleccionada: {selectedRoom}
            </div>
          </header>
        </article>
        <div className="selected-details">
          {selectedDateString && selectedTime && selectedRoom && (
            <div>
              <p>Día Seleccionado: {selectedDateString}</p>
              <p>Hora Seleccionada: {selectedTime}</p>
              <p>Tipo de Sala Seleccionada: {selectedRoom}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReservationView;
