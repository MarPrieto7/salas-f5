import React, { useState, useEffect } from 'react';
import './ReservationView.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ReservationView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [roomName, setRoomName] = useState('');
  const [reservationStatus, setReservationStatus] = useState('');

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const handleDateChange = (date) => {
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 4);
    
    if (date >= currentDate && date <= futureDate) {
      setSelectedDate(date);
      setSelectedDateString(formatDate(date));
    } else {
      alert('Solo puedes reservar para fechas de hoy hasta 4 meses en adelante');
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    if (event.target.value === 'Sala Hedy Lamarr') {
      setRoomName('Has seleccionado la Sala Conferencias');
    } else if (event.target.value === 'Sala Mary Lee') {
      setRoomName('Has seleccionado la Sala Mary Lee');
    } else if (event.target.value === 'Sala Only') {
      setRoomName('Has seleccionado la Sala Only');
    } else {
      setRoomName('');
    }
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    
    // Realizar la solicitud de reserva al servidor
    try {
      const response = await fetch('http://localhost:8000/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({    
          room: selectedRoom,
          hour: selectedTime,
          date: selectedDate, 
          user: 'MarUser'  
        })
      });
      
      if (response.ok) {
        setReservationStatus('¡Reserva exitosa!');
      } else {
        throw new Error('Error al crear reserva');
      }
    } catch (error) {
      console.error('Error al crear reserva:', error);
      setReservationStatus('Error al crear reserva');
    }
  };

  const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

  return (
    <main>
      <section className="main-section">
      <h1 className='title-main'>Reservas</h1><br></br>
      </section>
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
          <div style={{ marginBottom: '20px' }}></div>
          <h2>Seleccione su hora</h2>
          <input 
            type="time" 
            value={selectedTime} 
            onChange={handleTimeChange} 
            min="09:00" 
            max="21:00" 
          />
          <button onClick={handleReservationSubmit}>Reservar</button>
          <p>{reservationStatus}</p>
        </aside>
        <article>
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
                <p>{roomName}</p>
                <p>{selectedDateString}</p>
                <p>{selectedTime}</p>
              </div>
            )}
          </div>
        </article>
      </section>

      <section>
        <table className='table'>
                  <thead className='table-primary'>
                    <tr>
                        <th className='table-responsive'> Sala
                        </th>
                        <th className='table-responsive'> Fecha
                        </th>
                        <th className='table-responsive'> Horas
                        </th>
                        <th className='table-responsive'>Editar</th>
                    </tr>
                  </thead>
                    <tbody>
                    {datos.map((id) => (
                    <tr key={id.id}>
                        <td className='table-responsive'> {id.room} </td>
                        <td className='table-responsive'> {id.date} </td>
                        <td className='table-responsive'> {id.hour}  </td>
                        <td className='table-responsive'>  <i className="fas fa-edit"></i> </td>
                    </tr>
                    ))}
                    </tbody>
        </table>

      </section>
    </main>
  );
}

export default ReservationView;
