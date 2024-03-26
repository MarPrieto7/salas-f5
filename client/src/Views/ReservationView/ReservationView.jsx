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
  const [datos, setDatos] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');

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
    futureDate.setDate(futureDate.getDate() + 14); // Añade dos semanas a la fecha actual

    if (date >= currentDate && date <= futureDate) {
      setSelectedDate(date);
      setSelectedDateString(formatDate(date));
    } else {
      alert('Solo puedes reservar para fechas de hoy hasta dos semanas en adelante');
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    if (event.target.value === 'Sala Hedy Lamarr') {
      setRoomName('Has seleccionado la Sala Hedy Lamarr');
    } else if (event.target.value === 'Sala Mary Lee') {
      setRoomName('Has seleccionado la Sala Mary Lee');
    } else if (event.target.value === 'Sala Conferencia') {
      setRoomName('Has seleccionado la Sala Conferencia');
    } else if (event.target.value === 'Sala Only') {
      setRoomName('Has seleccionado la Sala Only');
    } else {
      setRoomName('');
    }
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    // Obtener la fecha y hora actual y la fecha y hora límite para reservar
    const currentDate = new Date();
    const minDateTime = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)); // Añade 24 horas

    // Establecer la fecha y hora seleccionada
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(parseInt(selectedTime.split(':')[0], 10));
    selectedDateTime.setMinutes(parseInt(selectedTime.split(':')[1], 10));

    // Verificar si la fecha y hora seleccionadas son válidas para reservar
    if (selectedDateTime < minDateTime) {
      alert('Debes reservar al menos 24 horas antes.');
      return;
    }

    const username = localStorage.getItem('username');
    // Realizar la solicitud de reserva al servidor
    try {
      const response = await fetch('http://localhost:8000/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({    
          room: selectedRoom,
          hour: selectedTime,
          duration : selectedDuration,
          date: selectedDate, 
          user: username  
        })
      });

      if (response.ok) {
        setReservationStatus('¡Reserva exitosa!');
        fetchData(); // Actualizar los datos después de hacer la reserva
      } else {
        throw new Error('Error al crear reserva');
      }
    } catch (error) {
      console.error('Error al crear reserva:', error);
      setReservationStatus('Error al crear reserva');
    }
  };

  const deleteReservation = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/reserve/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar la reserva');
      }
  
      // Actualizar la lista de reservas después de eliminar
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:8000/reserve");
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setDatos(data.filter(reservation => reservation.user === localStorage.getItem('username')));
    } catch (error) {
        console.error(error);
    }
};

  const daysInMonth = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

  useEffect(() => {
    fetchData();
  }, []);

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
            <option value="Sala Conferencia">Sala Conferencia</option>
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
              <h2>Seleccione la duración</h2>
          <select value={selectedDuration} onChange={handleDurationChange}>
  <option value="1">1 hora</option>
  <option value="2">2 horas</option>
 
</select>
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
                <p>{selectedDuration} hora(s)</p>
              </div>
            )}
          </div>
        </article>
      </section>
      <h1 className='title-main'>Reservas</h1><br/><br/>
      <section className="main-section">
        <table className='table'>
          <thead className='table-primary'>
            <tr>
              <th className='table-responsive'> Sala </th>
              <th className='table-responsive'> Fecha </th>
              <th className='table-responsive'> Horas </th>
              <th className='table-responsive'> Duracion </th>
              <th className='table-responsive'> Editar </th>
              <th className='table-responsive'> Eliminar </th>
            </tr>
          </thead>
          <tbody>
            {datos.map((reservation) => (
              <tr key={reservation.id}>
                <td className='table-responsive'>{reservation.room}</td>
                <td className='table-responsive'>{reservation.date}</td>
                <td className='table-responsive'>{reservation.hour}</td>
                <td className='table-responsive'>{reservation.duration} h</td>
                <td className='table-responsive'>
                  <i className="fas fa-edit"></i>
                </td>
                <td className='table-responsive'>
                  <button onClick={() => deleteReservation(reservation._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ReservationView;