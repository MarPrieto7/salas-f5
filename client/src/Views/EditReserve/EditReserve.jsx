
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditReserve.css'


function EditReserve() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reserve, setReserve] = useState({});
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para controlar si el usuario está loggeado


  useEffect(() => {
    const fetchReserve = async () => {
      try {
        const response = await fetch(`http://localhost:8000/reserve/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setReserve(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReserve();
  }, [id]);

  const handleChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/reserve/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserve),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }   

      if (response.ok) {
        if (data.token) {
            const isAdmin = data.role === 'admin'; 
            const isUser = data.role === 'user';
            const isProfessor = data.role === 'professor';

            // Almacenar información del usuario en localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('role', data.role);

            if (isAdmin) {
                // Redirigir a la página correspondiente al rol
                navigate('/differentpath');
            } else if (isUser) {
                navigate('/UserReservationView');
            } 
              else {
                    navigate('/ReservationView');
                }
        } else {
            alert('Has modificado el dato, haz click para volver a reservas. Gracias');
        }
    } else {
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  
    const userLoggedIn = localStorage.getItem('username'); 

    if (userLoggedIn) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
}, []);

const handleReturn = () => {
    if (isLoggedIn) {

  const role = localStorage.getItem('role');


        if (role) {
            const isAdmin = role === 'admin';
            const isUser = role === 'user';
            const isProfessor = role === 'professor';

            if (isAdmin) {
                 navigate('/differentpath');
            } else if (isUser) {
                   navigate('/UserReservationView');
            } else  {
                navigate('/ReservationView');
            } 
        } else {
    
            window.location.href = '/LoginRegisterView';
        }


    } else {
     
        window.location.href = '/LoginRegisterView';
    }
};

  return (
    <main className="main-edit-reserve">
      <section className="section-Edit-Reserve">
        <h2 className="section-edit-h2">Editar Reserva</h2>
        <form onSubmit={handleSubmit} className="form-Edit">
          <input
            type="text"
            name="user"
            value={reserve.user || ''}
            onChange={handleChange}
            placeholder="Nombre del usuario"
          />
          <br />
          <input
            type="text"
            name="date"
            value={reserve.date || ''}
            onChange={handleChange}
            placeholder="Fecha"
          />
          <br />
          <input
            type="text"
            name="hour"
            value={reserve.hour || ''}
            onChange={handleChange}
            placeholder="Hora"
          />
          <br />
          <input
            type="text"
            name="room"
            value={reserve.room || ''}
            onChange={handleChange}
            placeholder="sala"
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
          <button onClick={handleReturn} className="btn btn-secondary btn-volver">
            Volver a reservas
          </button>
        </form>
      </section>
    </main>
  );
}

export default EditReserve;